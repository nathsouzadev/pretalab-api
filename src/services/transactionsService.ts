import { transactions } from '../data'; 

type Transaction = {
    id: string;
    date: string;
    description: string;
    amount: number;
    type: "income" | "expense";
    category: string;
};

export const getTransactionsById = (id: string): Transaction | undefined => {
  return transactions.find((transaction) => transaction.id === id);
};

export const createTransaction = (transaction: Transaction): Transaction => {
  transactions.push(transaction);
  return transaction;
};
