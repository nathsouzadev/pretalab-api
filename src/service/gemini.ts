import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { Transaction } from "../data";
dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateText = async (prompt: string) =>
  ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

export const chat = async (prompt: any[]) => {
  const model = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return model;
};

export const financialAssistant = async (
  prompt: any[],
  transactions: Transaction[]
) => {
  const systemInstruction = `Você é um assistente financeiro e vai analisar os dados informados, conforme a solicitaçao do usuário. Os dados informados estão dentro de um array e possuem, valor, categoria, data, descrição e tipo (entrada ou saída). Os dados informados são:`;

  const model = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction: `${systemInstruction} ${JSON.stringify(transactions)}`,
    },
  });

  return model;
};
