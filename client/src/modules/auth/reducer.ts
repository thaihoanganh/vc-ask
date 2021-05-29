import { createSlice } from "@reduxjs/toolkit";

import { authLogin } from ".";

export const authSlide = createSlice({
  name: "auth",
  initialState: {
    status: "ready",
    data: {
      _id: "",
      username: "",
    },
  },
  reducers: {},
  extraReducers: {
    [authLogin.pending]: (state) => {
      state.status = "loading";
    },
    [authLogin.fulfilled]: (state) => {
      state.status = "ready";
    },
  },
});

export default authSlide.reducer;
