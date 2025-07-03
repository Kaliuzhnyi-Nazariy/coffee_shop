/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateUser, LogUser } from "./typesAndInterfaces";
import { UserResult } from "../generalTypesAndInterfaces";
import axios from "axios";

const baseURL = "https://coffee-shop-api-7and.onrender.com/api/auth";

export const signUp = createAsyncThunk<
  UserResult,
  CreateUser,
  { rejectValue: string | string[] }
>("auth/create", async (newUser, thunkAPI: any): Promise<UserResult> => {
  try {
    const res = await axios.post(`${baseURL}/signup`, newUser, {
      withCredentials: true,
    });

    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.response.data || error.message
    );
  }
});

export const signIn = createAsyncThunk<
  UserResult,
  LogUser,
  { rejectValue: string | string[] }
>("auth/signin", async (newUser, thunkAPI: any): Promise<UserResult> => {
  try {
    const res = await axios.post(`${baseURL}/signin`, newUser, {
      withCredentials: true,
    });

    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.response.data || error.message
    );
  }
});

export const logOut = createAsyncThunk<
  { message: string },
  void,
  { rejectValue: string | string[] }
>("auth/logout", async (thunkAPI: any): Promise<{ message: string }> => {
  try {
    const res = await axios.post(`${baseURL}/logout`, {
      withCredentials: true,
    });

    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || error.response.data || error.message
    );
  }
});
