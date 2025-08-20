import { Request, Response } from "express";
import {
  create as createPurchase,
  purchaseById,
  purchases,
} from "../service/purchases";

export const byId = (req: Request, res: Response) => {
  const purchase = purchaseById(req.params.id);
  res.json(purchase);
};

export const all = (req: Request, res: Response) => {
  const response = purchases();
  res.json(response);
};

export const create = (req: Request, res: Response) => {
  const purchase = createPurchase(req.body);
  res.json(purchase);
};
