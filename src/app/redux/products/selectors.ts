import { RootState } from "../store";

export const products = (state: RootState) => state.products.products;
export const product = (id: string) => (state: RootState) =>
  state.products.products.find((p) => p.id == id);
export const productsLoading = (state: RootState) => state.products.isLoading;
export const productsError = (state: RootState) => state.products.error;
