/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProductCart } from "./typesAndInterfaces";
import axios from "axios";

const baseURL = "http://localhost:3500/api/cart";

export const addToCart = createAsyncThunk<
  { newCartItem: IProductCart },
  IProductCart,
  { rejectValue: string | string[] }
>("user/cartAdd", async (newProduct, thunkAPI: any) => {
  try {
    const res = await axios.put(`${baseURL}/addtocart`, newProduct, {
      withCredentials: true,
    });

    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.response.data || error.message
    );
  }
});

export const removeFromCart = createAsyncThunk<
  { goodId: string },
  string,
  { rejectValue: string | string[] }
>("user/cartRem", async (goodId, thunkAPI: any) => {
  try {
    const res = await axios.put(`${baseURL}/remove/${goodId}`, {
      withCredentials: true,
    });

    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.response.data || error.message
    );
  }
});
