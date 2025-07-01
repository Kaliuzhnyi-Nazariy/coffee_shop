import { UserResult } from "../generalTypesAndInterfaces";

export interface CreateUser {
  name: string;
  phoneNumber: string;
  password: string;
  location: string;
}

export type LogUser = Omit<CreateUser, "location" | "name">;

export interface UserInitialState {
  user: UserResult;
  isLoading: boolean;
  error: null | string | string[];
  isLoggedIn: boolean;
}
