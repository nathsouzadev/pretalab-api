import { Request, Response } from 'express'
import { aiChat } from '../services/chatPrompt';

export const aiResponseChat = async (req: Request, res: Response) => {
    const { prompt } = req.body;

    const response = await aiChat(prompt)

    res.json({ response });
}