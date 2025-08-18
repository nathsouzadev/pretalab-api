import { Transaction, transactions } from "../data";

export const transactionById = (id: string): Transaction | undefined => {
  return transactions.find((transaction) => transaction.id === id);
};
