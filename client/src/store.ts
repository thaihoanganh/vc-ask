import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import authReducer from "@modules/auth/reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
