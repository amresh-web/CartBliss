import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import categoryReducer from "./auth/categorySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
  },
});

export default store;
