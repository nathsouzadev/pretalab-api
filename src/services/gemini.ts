import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';
dotenv.config();

import {TransactionService} from './transactions-service'
import { TransactionRepository } from "../repositories/transaction-repository";
import { ITransaction } from "../database/mongooseTransactionModel";
import {PurchasesService} from './purchases-service'
import { PurchasesRepository } from "../repositories/purchases-repository";
import { IPurchases } from "../database/mongoosePurchasesModel";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export const generateText = async (prompt: string) => ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

export const chat = async (prompt: any[]) =>  ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction: "Você é uma profissional de tecnologia, que atende crianças e precisa explicar as perguntas de forma didática. Toda pergunta que não for de tecnologia, diga que você não pode responder."
      
    }
  });

const transactionRepository = new TransactionRepository();
const transactionService = new TransactionService(transactionRepository);
const purchasesRepository = new PurchasesRepository();
const purchasesService = new PurchasesService(purchasesRepository)

export const financialAssistant = async (
  prompt: any[],
) => {
  const transactions: ITransaction[] = await transactionService.getAllTransactions();
  const purchases: IPurchases[] = await purchasesService.getAllPurchases();

  const allFinance = [...transactions, ...purchases]

  const systemInstruction = `Você é um assistente financeiro e vai analisar os dados informados, conforme a solicitaçao do usuário. Os dados informados estão dentro de um array e possuem, valor, categoria, data, descrição e tipo (entrada ou saída). Os dados informados são:`;

  const model = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction: `${systemInstruction} ${JSON.stringify(allFinance)}`,
    },
  });

  return model;
};

