import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import authReducer from "./auth.slice";
import productsReducer from "./products.slice";
import cartReducer from "./cart.slice";

export * from "./auth.slice";
export * from "./products.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer
  },
  middleware: [thunk]
});
