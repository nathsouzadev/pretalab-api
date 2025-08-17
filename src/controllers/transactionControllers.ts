import { TransactionService } from "../service/transactionService";
import { Request, Response } from "express";

export class TransactionController { 
    private transactionService: TransactionService;

    constructor(transactionService: TransactionService) {
        this.transactionService = transactionService;
    }

    public async CreateTransactionController(req: Request, res: Response): Promise<void> {
        const newTransaction = await this.transactionService.createTransactions(req.body);
    
        res.status(201).json({newTransaction});
    };

    public async GetTransactionByIdController(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
       const transaction = await this.transactionService.getTransactionsById(id);
       
       res.status(200).json({transaction});
    };

};


