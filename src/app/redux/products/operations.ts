/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProducts } from "./typesOrInterfaces";
import axios from "axios";

export const getProducts = createAsyncThunk<
  IProducts[],
  void,
  { rejectValue: any }
>("products/get", async (thunkAPI: any) => {
  try {
    const res = await axios.get(
      "https://coffee-shop-api-sandy.vercel.app/api/v1/products"
    );
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.message
    );
  }
});

export const getProduct = createAsyncThunk<
  IProducts,
  string,
  { rejectValue: any }
>("products/get", async (id: string, thunkAPI: any) => {
  try {
    const res = await axios.get(
      `https://coffee-shop-api-sandy.vercel.app/api/v1/products/${id}`
    );
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.message
    );
  }
});
