import { geminiInternal } from "../adapters/gemini";
import { chat, generateText } from "./gemini";

const chatContext: any[] = [];

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
  chatItem("user", prompt);

  const data = await chat(chatContext);
  const { response } = geminiInternal(data);
  chatItem("model", response);

  return {
    response,
    context: chatContext,
  };
};
