import { Request, Response } from 'express';
import { TransactionService } from '../services/transactions-service';

export class TransactionController {
  private transactionService: TransactionService;

  constructor(transactionService: TransactionService) {
    this.transactionService = transactionService;
  }

  public async getAllTransactions(_req: Request, res: Response): Promise<void> {
    const transactions = await this.transactionService.getAllTransactions();
    res.json(transactions);
  }

  public async createTransactions(req: Request, res: Response): Promise<void> {
    const newTransaction = await this.transactionService.createTransaction(req.body);
    res.status(201).json(newTransaction);
  }

  public async getTransactionId(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const transaction = await this.transactionService.getTransactionById(id);

    if (!transaction) {
      res.status(404).json({ message: "Transaction not found." });
      return;
    }

    res.json(transaction);
  }
}