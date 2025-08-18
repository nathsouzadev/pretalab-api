import { Request, Response } from "express";
import { transactionById } from "../service/transactions";

export const getTransactionById = (req: Request, res: Response) => {
  const transaction = transactionById(req.params.id);
  res.json({ transaction });
};
