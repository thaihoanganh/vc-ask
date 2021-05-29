import { createAsyncThunk } from "@reduxjs/toolkit";

import { AUTH_LOGIN } from ".";

export const authLogin: any = createAsyncThunk(AUTH_LOGIN, async () => {
  setTimeout(() => {
    return 124;
  }, 3000);
});
