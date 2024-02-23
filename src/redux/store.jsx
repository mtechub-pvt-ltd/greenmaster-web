import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import videoReducer from "./reducer/videoReducer";

export const store = configureStore({
  reducer: {
    user: authReducer,
    video: videoReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});