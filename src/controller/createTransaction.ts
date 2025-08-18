import { Request, Response } from "express"; 
import { createTransaction } from "../services/transactionsService";
import { randomUUID } from "crypto";

export const createTransactionController = (req: Request, res: Response): void => {
  const { amount, description, type } = req.body;

  const newTransaction = createTransaction({
    id: randomUUID(),
    date: new Date().toISOString(),
    description,
    amount,
    type,
    category: "Uncategorized"
  });

  res.status(201).json(newTransaction);
};
