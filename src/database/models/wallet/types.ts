import { ITransaction } from "../transaction";

export interface IWallet {
  id: number;
  userId: number;
  balance: number;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
  user: string;
  transactions: ITransaction[];
}
