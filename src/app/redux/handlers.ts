/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction } from "@reduxjs/toolkit";

export const handleLoading = (state: {
  isLoading: boolean;
  error: null | string | string[];
  [x: string]: any;
}) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejection = (
  state: {
    isLoading: boolean;
    error: null | string | string[];
    [x: string]: any;
  },
  action: PayloadAction<string | string[] | undefined>
) => {
  state.isLoading = false;
  if (typeof action.payload === "string" || Array.isArray(action.payload)) {
    state.error = action.payload;
  } else {
    state.error = "Something went wrong";
  }
};
