import { Request, Response } from "express";
import {
  create as createTransaction,
  transactionById,
  transactions,
} from "../service/transactions";

export const byId = (req: Request, res: Response) => {
  const transaction = transactionById(req.params.id);
  res.json(transaction);
};

export const all = (req: Request, res: Response) => {
  const response = transactions();
  res.json(response);
};

export const create = (req: Request, res: Response) => {
  const transaction = createTransaction(req.body);
  res.json(transaction);
};
