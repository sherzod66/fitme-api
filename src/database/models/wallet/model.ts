import { model, Schema } from "mongoose";
import { IWallet } from "./types";

const walletSchema = new Schema<Partial<IWallet>>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Ссылка на пользователя
  balance: {
    type: Number,
    default: 0,
  }, // Баланс кошелька
  currency: {
    type: String,
    required: true,
  }, // Валюта кошелька
  transactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Transaction",
    },
  ], // Связанные транзакции
  createdAt: {
    type: Date,
    default: Date.now,
  }, // Дата создания кошелька
  updatedAt: {
    type: Date,
    default: Date.now,
  }, // Дата последнего обновления
});

export const WalletModel = model("Wallet", walletSchema);
