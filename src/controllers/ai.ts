import {Response, Request} from "express";
import { ai, aiChat } from "../services/prompt"

 export const aiResponse = async (req: Request, res: Response) => {
  const { prompt } = req.body;

  const response = await ai(prompt);
  
  res.json(response)

};

 export const aiChatResponse = async (req: Request, res: Response) => {
  const { prompt } = req.body;

  const response = await aiChat(prompt);
  
  res.json(response)

};