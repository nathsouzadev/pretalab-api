import  {getTransactionsById}  from "../../src/service/TransactionService";
import { Request, Response } from "express";

export const GetTransactionByIdController = (req: Request, res: Response): void => {
    const transaction = getTransactionsById(req.params.id);
    res.status(200).json({transaction});

};

