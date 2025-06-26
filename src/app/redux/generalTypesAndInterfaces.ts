import mongoose, { Types } from "mongoose";

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
  _id: mongoose.Types.ObjectId;
  name: string;
  phoneNumber: string;
  favorites: string[] | undefined;
  location: string | undefined;
  paymentMethods: PaymentMethod[] | undefined;
  [key: string]: unknown;
}
