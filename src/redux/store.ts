import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducer/produc-reducer";

export const reduxStore = configureStore({
  reducer: {
    selectedProduct: productReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
