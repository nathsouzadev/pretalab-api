import {Response, Request} from "express";
import { ai } from "../services/prompt"

 export const aiResponse = async (req: Request, res: Response) => {
  const { prompt } = req.body;

  const response = ai(prompt);
  
  res.json(response)

};