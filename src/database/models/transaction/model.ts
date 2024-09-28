import { model, Schema } from "mongoose";
import { ITransaction } from "./types";

// Схема для транзакций
const transactionSchema = new Schema<Partial<ITransaction>>({
  wallet: {
    type: Schema.Types.ObjectId,
    ref: "Wallet",
    required: true,
  }, // Ссылка на кошелек
  amount: {
    type: Number,
    required: true,
  }, // Сумма транзакции
  type: {
    type: String,
    enum: ["DEPOSIT", "WITHDRAWAL"],
    required: true,
  }, // Тип транзакции (пополнение или снятие)
  status: {
    type: String,
    enum: ["COMPLETED", "PENDING", "CANCELED", "FAILED"],
    required: true,
  },
  description: {
    type: String,
  }, // Описание транзакции
  createdAt: {
    type: Date,
    default: Date.now,
  }, // Дата создания транзакции
});

export const TransactionModel = model("Transaction", transactionSchema);
