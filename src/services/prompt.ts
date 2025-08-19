import { geminiInteral } from "../adapters/gemini";
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

    return data;
}

export const ai = async (prompt: string) => {
    const data = await generateText(prompt);
    const response = geminiInteral(data);

    return response;
}

export const aiChat = async (prompt: string) => {
    const input = chatItem("user", prompt);

    const data = await chat(chatContext);
    const { response } = geminiInteral(data);

    const output = chatItem("model", response);

    return {
        response,
        context: chatContext
    }

}