import { Request, Response } from "express";
import { Transaction, transactions }  from "../data";


export const getTransactionsById = (id: string): Transaction | undefined => {
        return transactions.find((t) => t.id === id);
    
};