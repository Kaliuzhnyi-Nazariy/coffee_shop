/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PaymentMethod, UserResult } from "../generalTypesAndInterfaces";
import axios from "axios";
import { CreateUser } from "./typesAndInterfaces";
import { IProducts } from "../products/typesOrInterfaces";

const baseURL = "https://coffee-shop-api-7and.onrender.com/api/user";

export const getUser = createAsyncThunk<
  UserResult,
  void,
  { rejectValue: string | string[] }
>("user/get", async (thunkAPI: any) => {
  try {
    const res = await axios.get(baseURL, { withCredentials: true });

    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.response.data || error.message
    );
  }
});

export const updateUser = createAsyncThunk<
  UserResult,
  Partial<CreateUser>,
  { rejectValue: string | string[] }
>("user/update", async (newUserData, thunkAPI: any) => {
  try {
    const res = await axios.put(`${baseURL}/update`, newUserData, {
      withCredentials: true,
    });

    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.response.data || error.message
    );
  }
});

export const deleteUser = createAsyncThunk<
  UserResult,
  void,
  { rejectValue: string | string[] }
>("user/delete", async (thunkAPI: any) => {
  try {
    const res = await axios.delete(`${baseURL}/`, {
      withCredentials: true,
    });

    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.response.data || error.message
    );
  }
});

export const addFavorites = createAsyncThunk<
  { favorites: IProducts[] },
  { goodId: string; prodData: IProducts },
  { rejectValue: string | string[] }
>("user/addFav", async ({ goodId, prodData }, thunkAPI: any) => {
  try {
    const res = await axios.patch(`${baseURL}/${goodId}`, prodData, {
      withCredentials: true,
    });

    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.response.data || error.message
    );
  }
});

export const removeFavorites = createAsyncThunk<
  { favorites: IProducts[] },
  string,
  { rejectValue: string | string[] }
>("user/removeFav", async (goodId, thunkAPI: any) => {
  try {
    const res = await axios.patch(`${baseURL}/${goodId}/remove`, {
      withCredentials: true,
    });

    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.response.data || error.message
    );
  }
});

export const addPayment = createAsyncThunk<
  PaymentMethod[],
  PaymentMethod,
  { rejectValue: string | string[] }
>("user/addPayment", async (method, thunkAPI: any) => {
  try {
    const res = await axios.post(`${baseURL}/addpayment`, method, {
      withCredentials: true,
    });

    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.response.data || error.message
    );
  }
});

export const removePayment = createAsyncThunk<
  { paymentId: string },
  string,
  { rejectValue: string | string[] }
>("user/removePayment", async (paymentId, thunkAPI: any) => {
  try {
    const res = await axios.post(`${baseURL}/removepayment/${paymentId}`, {
      withCredentials: true,
    });

    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.response.data || error.message
    );
  }
});
