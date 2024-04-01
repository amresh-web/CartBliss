import { configureStore, createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authAction = auth.actions;
export const store = configureStore({ reducer: auth.reducer });
