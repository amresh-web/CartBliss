import axios from "axios";
import { toast } from "react-toastify";
import { setLoading, login, logout } from "./redux/auth/authSlice";
import store from "./redux/store";

let setLoadingGlobal;
let isRefreshing = false;
let failedQueue = [];

// Set a global loading function to show/hide loader during requests
export const setGlobalLoader = (setLoader) => {
  setLoadingGlobal = setLoader;
};

// Setup Axios instance with base URL and credentials support
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true, // Automatically send cookies (including refresh token)
});

// Process any failed requests during token refresh
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const response = await axiosInstance.post(
      "/user/refresh",
      {},
      { withCredentials: true }
    );
    return response.data.accessToken;
  } catch (error) {
    throw error;
  }
};

// Interceptor to show loader when request starts
axiosInstance.interceptors.request.use(
  (config) => {
    setLoadingGlobal?.(true);
    return config;
  },
  (error) => {
    setLoadingGlobal?.(false);
    return Promise.reject(error);
  }
);

// Interceptor to handle expired access token and refresh it
axiosInstance.interceptors.response.use(
  (response) => {
    //setLoadingGlobal?.(false);
    store.dispatch(setLoading(false));
    return response;
  },
  async (error) => {
    const { status, config } = error.response || {};

    //setLoadingGlobal?.(false);
    store.dispatch(setLoading(false));

    if (status === 403) {
      sessionStorage.removeItem("authStatus");
      sessionStorage.removeItem("userData");
      toast.error("Access denied. You do not have permission.");

      window.location.href = "/login"; // Optional: Redirect the user to login or another route

      return Promise.reject(error); // Stop further execution, reject the error
    }

    if (status === 401 && !config._retry) {
      // If access token is expired and no retry flag, attempt to refresh token
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            config.headers["Authorization"] = `Bearer ${token}`;
            return axiosInstance(config); // Retry the request with new access token
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      config._retry = true;
      isRefreshing = true;
      store.dispatch(setLoading(true));

      try {
        const newAccessToken = await refreshAccessToken();

        // Update the authorization header with the new token
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;
        config.headers["Authorization"] = `Bearer ${newAccessToken}`;

        store.dispatch(login({ accessToken: newAccessToken }));
        processQueue(null, newAccessToken); // Retry queued requests with the new token

        return axiosInstance(config); // Retry the original request
      } catch (refreshError) {
        processQueue(refreshError, null);
        store.dispatch(logout());
        toast.warning("Session expired. Please login again.");
        window.location.href = "/login"; // Redirect to login if refresh fails
        sessionStorage.removeItem("authStatus");
        sessionStorage.removeItem("userData");
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
        store.dispatch(setLoading(false));
      }
    }

    // Handle other error codes globally
    switch (status) {
      case 403:
        toast.error("Access denied. You do not have permission.");
        break;
      case 404:
        toast.error("Requested resource not found.");
        break;
      case 500:
        toast.error("Server error. Retrying...");
        return axiosInstance(config); // Retry the request on server error
      default:
        toast.error("An unexpected error occurred.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
