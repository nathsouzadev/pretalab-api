import { Request, Response } from "express";
import transactionFactory from "../../src/factory/transactionFactory";
import { Transaction, transactions }  from "../data";

export default { 
        createTransactions: (transaction: Transaction): Transaction => {
        const newTransaction = transactionFactory.create(transaction);
        transactions.push(newTransaction);
        return newTransaction;
        },

        getTransactionsById: (id: string): Transaction | undefined => {
        return transactions.find((t) => t.id === id);
        },





};