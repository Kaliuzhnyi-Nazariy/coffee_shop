import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInitialState } from "./typesAndInterfaces";
import { logOut, signIn, signUp } from "./authOperations";
import { handleLoading, handleRejection } from "../handlers";
import { PaymentMethod, UserResult } from "../generalTypesAndInterfaces";
import {
  addFavorites,
  addPayment,
  deleteUser,
  getUser,
  removeFavorites,
  removePayment,
  updateUser,
} from "./userOperations";
import { IProducts } from "../products/typesOrInterfaces";
import { addToCart, removeFromCart } from "./cart/cartOperations";

const initialState: UserInitialState = {
  user: {
    _id: null,
    favorites: [],
    location: "",
    name: "",
    cart: [],
    paymentMethods: [],
    phoneNumber: "",
  },
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state: UserInitialState) => {
        handleLoading(state);
      })
      .addCase(
        signUp.rejected,
        (
          state: UserInitialState,
          action: PayloadAction<string | string[] | undefined>
        ) => {
          handleRejection(state, action);
        }
      )
      .addCase(
        signUp.fulfilled,
        (state: UserInitialState, action: PayloadAction<UserResult>) => {
          state.isLoading = false;
          state.user = action.payload;
          state.isLoggedIn = true;
        }
      )
      .addCase(signIn.pending, (state: UserInitialState) => {
        handleLoading(state);
      })
      .addCase(
        signIn.rejected,
        (
          state: UserInitialState,
          action: PayloadAction<string | string[] | undefined>
        ) => {
          handleRejection(state, action);
        }
      )
      .addCase(
        signIn.fulfilled,
        (state: UserInitialState, action: PayloadAction<UserResult>) => {
          state.isLoading = false;
          state.user = action.payload;
          state.isLoggedIn = true;
        }
      )
      .addCase(logOut.pending, (state: UserInitialState) => {
        handleLoading(state);
      })
      .addCase(
        logOut.rejected,
        (
          state: UserInitialState,
          action: PayloadAction<string | string[] | undefined>
        ) => {
          handleRejection(state, action);
        }
      )
      .addCase(logOut.fulfilled, (state: UserInitialState) => {
        state.isLoading = false;
        state.user = initialState.user;
        state.isLoggedIn = false;
      })
      .addCase(getUser.pending, (state: UserInitialState) => {
        handleLoading(state);
      })
      .addCase(
        getUser.fulfilled,
        (state: UserInitialState, action: PayloadAction<UserResult>) => {
          state.isLoading = false;
          state.user = action.payload;
          state.isLoggedIn = true;
        }
      )
      .addCase(
        getUser.rejected,
        (
          state: UserInitialState,
          action: PayloadAction<string | string[] | undefined>
        ) => {
          handleRejection(state, action);
        }
      )
      .addCase(updateUser.pending, (state: UserInitialState) => {
        handleLoading(state);
      })
      .addCase(
        updateUser.fulfilled,
        (state: UserInitialState, action: PayloadAction<UserResult>) => {
          state.isLoading = false;
          state.user = action.payload;
        }
      )
      .addCase(
        updateUser.rejected,
        (
          state: UserInitialState,
          action: PayloadAction<string | string[] | undefined>
        ) => {
          handleRejection(state, action);
        }
      )
      .addCase(deleteUser.pending, (state: UserInitialState) => {
        handleLoading(state);
      })
      .addCase(deleteUser.fulfilled, (state: UserInitialState) => {
        state.isLoading = false;
        state.user = initialState.user;
      })
      .addCase(
        deleteUser.rejected,
        (
          state: UserInitialState,
          action: PayloadAction<string | string[] | undefined>
        ) => {
          handleRejection(state, action);
        }
      )
      .addCase(addFavorites.pending, (state: UserInitialState) => {
        handleLoading(state);
      })
      .addCase(
        addFavorites.fulfilled,
        (
          state: UserInitialState,
          action: PayloadAction<{ favorites: IProducts[] | undefined }>
        ) => {
          state.isLoading = false;
          state.user.favorites = action.payload.favorites || [];
        }
      )
      .addCase(
        addFavorites.rejected,
        (
          state: UserInitialState,
          action: PayloadAction<string | string[] | undefined>
        ) => {
          handleRejection(state, action);
        }
      )
      .addCase(removeFavorites.pending, (state: UserInitialState) => {
        handleLoading(state);
      })
      .addCase(
        removeFavorites.fulfilled,
        (
          state: UserInitialState,
          action: PayloadAction<{ favorites: IProducts[] | undefined }>
        ) => {
          state.isLoading = false;
          state.user.favorites = action.payload.favorites || [];
        }
      )
      .addCase(
        removeFavorites.rejected,
        (
          state: UserInitialState,
          action: PayloadAction<string | string[] | undefined>
        ) => {
          handleRejection(state, action);
        }
      )
      .addCase(addPayment.pending, (state: UserInitialState) => {
        handleLoading(state);
      })
      .addCase(
        addPayment.fulfilled,
        (state: UserInitialState, action: PayloadAction<PaymentMethod[]>) => {
          state.isLoading = false;
          state.user.paymentMethods = action.payload;
        }
      )
      .addCase(
        addPayment.rejected,
        (
          state: UserInitialState,
          action: PayloadAction<string | string[] | undefined>
        ) => {
          handleRejection(state, action);
        }
      )
      .addCase(removePayment.pending, (state: UserInitialState) => {
        handleLoading(state);
      })
      .addCase(
        removePayment.fulfilled,
        (
          state: UserInitialState,
          action: PayloadAction<{ paymentId: string }>
        ) => {
          state.isLoading = false;
          state.user.paymentMethods.filter(
            (meth) => meth._id != action.payload.paymentId
          );
        }
      )
      .addCase(
        removePayment.rejected,
        (
          state: UserInitialState,
          action: PayloadAction<string | string[] | undefined>
        ) => {
          handleRejection(state, action);
        }
      )
      .addCase(addToCart.pending, (state: UserInitialState) => {
        handleLoading(state);
      })
      .addCase(
        addToCart.fulfilled,
        (
          state: UserInitialState,
          action: PayloadAction<{ newCartItem: IProducts }>
        ) => {
          state.isLoading = false;
          state.user.cart.push(action.payload.newCartItem);
        }
      )
      .addCase(
        addToCart.rejected,
        (
          state: UserInitialState,
          action: PayloadAction<string | string[] | undefined>
        ) => {
          handleRejection(state, action);
        }
      )
      .addCase(removeFromCart.pending, (state: UserInitialState) => {
        handleLoading(state);
      })
      .addCase(
        removeFromCart.fulfilled,
        (
          state: UserInitialState,
          action: PayloadAction<{ goodId: string }>
        ) => {
          state.isLoading = false;
          state.user.cart.filter((meth) => meth.id != action.payload.goodId);
        }
      )
      .addCase(
        removeFromCart.rejected,
        (
          state: UserInitialState,
          action: PayloadAction<string | string[] | undefined>
        ) => {
          handleRejection(state, action);
        }
      );
  },
});

export const userReducer = userSlice.reducer;
