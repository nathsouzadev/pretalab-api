import { Request, Response } from "express";
import { products } from "../data";

export const all = (req: Request, res: Response) => {
  res.json(products);
};
