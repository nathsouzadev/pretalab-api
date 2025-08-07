import request from "supertest";
import app from "../../src/index";
import { transactions } from "../../src/data";

describe("Lógica de busca de transação", () => {

  it("deve encontrar uma transação com um ID válido", () => {
    // pega o ID da primeira transação para o teste
    const validId = "1";
    const foundTransaction = transactions.find((t) => t.id === validId);

    // verifica se a transação foi encontrada
    expect(foundTransaction).toBeDefined();
    // verifica se a transação encontrada tem o ID correto
    expect(foundTransaction?.id).toBe(validId);
  });

  it("não deve encontrar uma transação com um ID inválido", () => {
    // usa um ID que não existe na lista
    const invalidId = "999";
    const foundTransaction = transactions.find((t) => t.id === invalidId);

    // verifica se a transação não foi encontrada
    expect(foundTransaction).toBeUndefined();
  });
});
