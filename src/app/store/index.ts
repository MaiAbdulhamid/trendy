import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth.slice";
import productsReducer from "./products.slice";

export * from "./auth.slice";
export * from "./products.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer
  },
});
