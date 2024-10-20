import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: !!sessionStorage.getItem("authStatus"),
  userData: JSON.parse(sessionStorage.getItem("userData")) || null,
  loading: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
      state.loading = false;
      sessionStorage.setItem("authStatus", "true");
      sessionStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
      sessionStorage.removeItem("authStatus");
      sessionStorage.removeItem("userData");
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
