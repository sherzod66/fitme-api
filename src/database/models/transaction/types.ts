export interface ITransaction {
  id: number;
  walletId: number;
  amount: number;
  type: EnumTransactionType; // Тип транзакции (например, "DEPOSIT" или "WITHDRAWAL")
  description: string; // Описание транзакции
  createdAt: Date;
  status: EnumTransactionType;
  wallet: string;
}

enum EnumTransactionType {
  DEPOSIT = "DEPOSIT",
  WITHDRAWAL = "WITHDRAWAL",
}
enum EnumTransactionType {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  FAILED = "FAILED",
}
