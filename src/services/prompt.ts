import { geminiInteral } from "../adapters/gemini";
import { generateText } from "./gemini";

export const ai = async (prompt: string) => {
    const data = await generateText(prompt);
    const response = geminiInteral(data);

    return response;
}