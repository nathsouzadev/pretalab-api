import { geminiAdapter } from '../adapters/geminiAdapter';
import { chat } from './gemini'

const context: any[] = [];

export const aiChat = async (prompt: string) => {
    
    const input = {
        role: "user",
        parts:[
            {
                text: prompt
            },
        ],
    };

    context.push(input);
    
    const data = await chat(context);

    const { response } = geminiAdapter(data);


    const output = {
        role: "model",
        parts:[
            {
                text: response,
            },
        ],
    };

    context.push(output);
    
     return {
        response,
        context,
     };
};

