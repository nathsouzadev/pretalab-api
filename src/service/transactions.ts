import { randomUUID } from "crypto";
import { Transaction, transactions as transactionsData } from "../data";

export const transactionById = (id: string): Transaction | undefined => {
  return transactionsData.find((transaction) => transaction.id === id);
};

export const transactions = (): Transaction[] => {
  return transactionsData;
};

export const create = (transaction: Omit<Transaction, "id">): Transaction => {
  const newTransaction = {
    ...transaction,
    id: randomUUID(),
  };

  transactionsData.push(newTransaction);
  return newTransaction;
};
