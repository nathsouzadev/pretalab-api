const financialAssistant = jest.fn();
const updateOne = jest.fn();
const geminiInteral = jest.fn(data => ({
  response: data.candidates[0].content.parts[0].text,
}));

jest.mock("../../src/services/gemini", () => ({ financialAssistant }));
jest.mock("../../src/database/mongooseGeminiModel", () => ({
  HistoricoModel: { updateOne },
}));
jest.mock("../../src/adapters/gemini", () => ({
  geminiInteral
}));

import { aiChatInteration } from "../../src/services/prompt";

describe("aiChatInteration Service", () => {
  beforeEach(jest.clearAllMocks);

  it("should process a prompt, call the Gemini API, update history, and return the correct response", async () => {
    const prompt = "Quanto eu gastei esse mês?";
    const answer = "Não tenho acesso a suas transações ainda.";

    const mockGeminiResponse = {
      candidates: [{ content: { parts: [{ text: answer }] } }]
    };

    financialAssistant.mockResolvedValue(mockGeminiResponse);
    updateOne.mockResolvedValue({ acknowledged: true });

    const result = await aiChatInteration(prompt);

    expect(financialAssistant).toHaveBeenCalledTimes(1);
    expect(updateOne).toHaveBeenCalledTimes(1);

    expect(result).toMatchObject({
      responseText: answer,
      context: [
        { role: "user", parts: [{ text: prompt }] },
        { role: "model", parts: [{ text: answer }] },
      ]
    });
  });
});
