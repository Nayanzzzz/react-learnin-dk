import { createSlice } from "@reduxjs/toolkit";
import { IProductData } from "../../lib/products-data";

const selectedProduct: IProductData[] = [];

const productSlice = createSlice({
  name: "product",
  initialState: selectedProduct,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromAddToCart: (state, action) => {
        const index = state.findIndex((v)=>v.id == action.payload)
      state.splice(index,1)  
      
    },
  },
});

export const { addToCart, removeFromAddToCart } = productSlice.actions;

export const productReducer = productSlice.reducer;
