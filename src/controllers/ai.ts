import {Response, Request} from "express";
import { ai, aiChatInteration } from "../services/prompt"
import { HistoricoModel } from "../database/mongooseGeminiModel";

 export const aiResponse = async (req: Request, res: Response) => {
  const { prompt } = req.body;

  const response = await ai(prompt);
  
  res.json(response)

};

 export const aiChatResponse = async (req: Request, res: Response) => {
  const { prompt } = req.body;

  const response = await aiChatInteration(prompt);
  
  res.json(response)

};

export const getAiChatResponse = async (req: Request, res: Response) => {
  try {
    const history = await HistoricoModel.findOne({});
    if (!history) {
      return res.json({ interactions: [] });
    }
    res.json(history.interactions);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao carregar o histórico do chat.' });
}};