import  transactionService  from "../service/transactionService";
import transactionFactory from "../factory/transactionFactory";
import { Request, Response } from "express";

export const CreateTransactionController = (req: Request, res: Response): void => {
    const { id, date, description, amount, type, category } = req.body;
    
    const newTransaction = transactionService.createTransactions({id, date, description, amount, type, category});

    res.status(201).json({newTransaction});
};

export const GetTransactionByIdController = (req: Request, res: Response): void => {
    const transaction = transactionService.getTransactionsById(req.params.id);
    
    res.status(200).json({transaction});
};