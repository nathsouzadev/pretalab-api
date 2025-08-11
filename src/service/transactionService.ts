import { Request, Response } from "express";
import transactionFactory from "../../src/factory/transactionFactory";
import { Transaction, transactions }  from "../data";
import mongoose from 'mongoose';

export const createTransactions = async (req:Request, res:Response) =>{ 
        try {
        // createTransactions: (transaction: Transaction): Promise<Transaction> => {
        // const newTransaction = {
        //         id: new mongoose.Types.ObjectId(),
        //         date: new Date().toLocaleDateString('pt-BR'),
        //         description: transaction.description,
        //         amount: transaction.amount,
        //         type: transaction.type,
        //         category: transaction.category
        // }
        // const createdTransaction = await newTransaction.save();

        
        return newTransaction;
        } 
}
        // const newTransaction = transactionFactory.create(transaction);
        // transactions.push(newTransaction);
        

        // getTransactionsById: (id: string): Transaction | undefined => {
        // return transactions.find((t) => t.id === id);
        // },





};