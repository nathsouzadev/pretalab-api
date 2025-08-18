import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
}); 

export const generateText = async (prompt: string) => {
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });
};

export const chat = async (prompt: any[]) => {
    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            maxOutputTokens: 2000
        }
    });
};