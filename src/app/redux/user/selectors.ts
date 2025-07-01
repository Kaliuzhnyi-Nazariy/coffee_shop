import { RootState } from "../store";

export const userInfo = (state: RootState) => state.user.user;
export const userLoading = (state: RootState) => state.user.isLoading;
export const userError = (state: RootState) => state.user.error;
export const userIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const userCart = (state: RootState) => state.user.user.cart;
export const userFavorite = (state: RootState) => state.user.user.favorites;
