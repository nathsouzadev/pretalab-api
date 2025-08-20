import { Request, Response } from "express";
import { chatAiInteration } from "../service/prompt";

export const aiResponse = async (req: Request, res: Response) => {
  const { prompt } = req.body;

  const response = await chatAiInteration(prompt);

  res.json(response);
};
