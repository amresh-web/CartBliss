/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import "../src/assets/scss/custom.scss";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import RouteLayout from "./Route";
import Error from "./Error";
import AccountLayout from "./pages/Account/Account";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "./redux/auth/categorySlice";
import PrivateRoute from "./components/Common/PrivateRoute";
import axiosInstance from "./axios-interceptor";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Details = React.lazy(() => import("./components/Common/Details"));
const SmartPhone = React.lazy(() => import("./pages/smart-phone/SmartPhones"));
const Kitchen = React.lazy(() => import("./pages/Kitchen/Kitchen"));
const Television = React.lazy(() => import("./pages/Television/Television"));
const HomeAppliances = React.lazy(() =>
  import("./pages/HomeAppliances/HomeAppliances")
);
const SmartHome = React.lazy(() => import("./pages/SmartHome/SmartHome"));
const Laptop = React.lazy(() => import("./pages/Laptop/Laptop"));
const Camera = React.lazy(() => import("./pages/Camera/Camera"));
const ProductList = React.lazy(() => import("./components/Common/ProductList"));
const ProductDetail = React.lazy(() => import("./components/Common/Details"));
const Signup = React.lazy(() => import("./pages/Account/Signup/Signup"));
const Login = React.lazy(() => import("./pages/Account/Login/Login"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const AddProduct = React.lazy(() => import("./seller/AddProduct"));
const SellerCategory = React.lazy(() => import("./seller/Category/Category"));
const Sellerbrand = React.lazy(() => import("./seller/Brand/Brand"));
const SellerModel = React.lazy(() => import("./seller/ProductModel/Model"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const refreshTokenOnLoad = async () => {
      const authStatus = sessionStorage.getItem("authStatus");
      if (authStatus) {
        try {
          await axiosInstance.post("/user/refresh"); // Call refresh token API
        } catch (error) {
          sessionStorage.removeItem("authStatus");
          console.error("Token refresh failed on load", error);
          // Handle navigation to login if refresh fails
        }
      }
    };

    refreshTokenOnLoad();
    dispatch(fetchCategoryData());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      element: <RouteLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "smartphone", element: <SmartPhone /> },
        { path: "television", element: <Television /> },
        { path: "details", element: <Details /> },
        { path: "kitchen", element: <Kitchen /> },
        { path: "homeappliances", element: <HomeAppliances /> },
        { path: "smarthome", element: <SmartHome /> },
        { path: "laptops", element: <Laptop /> },
        { path: "camera", element: <Camera /> },
        { path: "product/:name", element: <ProductList /> },
        { path: "product/:name/:productCode", element: <ProductDetail /> },
        { path: "profile", element: <Profile /> },
        {
          path: "addproduct",
          element: (
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          ),
        },
        { path: "category", element: <SellerCategory /> },
        { path: "brand", element: <Sellerbrand /> },
        //{ path: "model", element: <SellerModel /> },
      ],
    },
    {
      element: <AccountLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
