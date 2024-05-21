import { configureStore } from "@reduxjs/toolkit";

import authenticationSlice from "./features/authentication/authenticationSlice";
import productSlice from "./features/product/productSlice";
import categorySlice from "./features/category/categorySlice";

// reducers

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    product: productSlice,
    category: categorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
