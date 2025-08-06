import { soma } from "../../shared/utils/soma";

describe("Função soma", () => {
  it("deve retornar 7 para soma(3, 4)", () => {
    const resultado = soma(3, 4);
    expect(resultado).toBe(7);
  });
});