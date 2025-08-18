import { geminiAdapter } from '../adapters/geminiAdapter';
import { generateText } from './gemini' 

export const ai = async (prompt: string) => {
    const data = await generateText(prompt);

    const response = geminiAdapter(data);

    return response;
}