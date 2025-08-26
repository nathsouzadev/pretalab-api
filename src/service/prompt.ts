import { geminiInternal } from "../adapters/gemini";
import { chat, financialAssistant, generateText } from "./gemini";
import { transactions } from "./transactions";

const chatContext: any[] = [];

const transactionsContext = () => transactions();

const chatItem = (role: string, text: string) => {
  const data = {
    role,
    parts: [
      {
        text,
      },
    ],
  };
  chatContext.push(data);
};

export const chatAiInteration = async (prompt: string) => {
  const transactionsData = transactionsContext();
  chatItem("user", prompt);

  const data = await financialAssistant(chatContext, transactionsData);
  const { response } = geminiInternal(data);
  chatItem("model", response);

  return {
    response,
    context: chatContext,
  };
};
