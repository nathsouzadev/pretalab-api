import { geminiInteral } from "../adapters/gemini";
import { chat, financialAssistant,generateText } from "./gemini";
import { HistoricoModel } from "../database/mongooseGeminiModel";

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
    chatContext.push(data)
}

export const ai = async (prompt: string) => {
    const data = await generateText(prompt);
    const response = geminiInteral(data);

    return response;
}

export const aiChatInteration = async (prompt: string) => {
    chatItem("user", prompt);

    const data = await financialAssistant(chatContext);
    const responseText = geminiInteral(data).response;

        const userMessage = {
        role: "user",
        text: prompt,
        timestamp: new Date()
    };

    const modelMessage = {
        role: "model",
        text: responseText,
        timestamp: new Date()
    };

    await HistoricoModel.updateOne(
        {},
        { $push: { interactions: { $each: [userMessage, modelMessage] } } },
        { upsert: true }
    )

    chatItem("model", responseText);

    return {
        responseText,
        context: chatContext
    }

}