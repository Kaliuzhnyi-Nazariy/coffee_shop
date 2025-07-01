import mongoose, { Types } from "mongoose";
import { IProducts } from "./products/typesOrInterfaces";

export type PaymentMethod = {
  type: "card" | "paypal";
  cardHolderName?: string;
  brand?: string;
  // last4?: string;
  expiryMonth?: string;
  expiryYear?: string;
  email?: string;
  cardNumber?: string;
  cvc?: string;
  token?: string;
  _id?: string | Types.ObjectId;
};

export interface UserResult {
  _id: mongoose.Types.ObjectId | null;
  name: string;
  phoneNumber: string;
  favorites: IProducts[] | undefined;
  location: string | undefined;
  cart: IProducts[];
  paymentMethods: PaymentMethod[];
  [key: string]: unknown;
}
