import { configureStore } from "@reduxjs/toolkit";
import { UserApi } from "../service/UserApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [UserApi.reducerPath]: UserApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserApi.middleware),
});
