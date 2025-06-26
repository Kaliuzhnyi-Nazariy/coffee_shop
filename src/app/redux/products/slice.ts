import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts, ProductState } from "./typesOrInterfaces";
import { getProducts } from "./operations";

export const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: null,
};

const handleError = (state: ProductState, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const pendingHandle = (state: ProductState) => {
  state.isLoading = true;
  state.error = null;
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, pendingHandle)
      .addCase(
        getProducts.fulfilled,
        (state: ProductState, action: PayloadAction<IProducts[]>) => {
          state.isLoading = false;
          state.products = action.payload;
        }
      )
      .addCase(getProducts.rejected, handleError);
  },
});

export const productsReducer = productSlice.reducer;
