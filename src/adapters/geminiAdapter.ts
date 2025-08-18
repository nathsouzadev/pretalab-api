export const geminiAdapter = (data: any) => {
    return {
        response: data.candidates[0].content.parts[0].text,
    }
}