import request from "supertest";
import app from "../../src/index";
import { transactions } from "../../src/data";

describe("Transactions API", () => {
  it("should return a 200 status code", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  it("should return a transaction with status 200 for a valid ID", async () => {
    // pega o ID da primeira transação para garantir que é válido
    const validId = transactions[0].id;
    const response = await request(app).get(`/transactions/${validId}`);

    // verifica se o status é 200 e se o corpo da resposta é a transação esperada
    expect(response.status).toBe(200);
    expect(response.body).toEqual(transactions[0]);
  });

  it("should return status 404 for an invalid ID", async () => {
    // usa um ID que não existe na lista de dados
    const invalidId = "999";
    const response = await request(app).get(`/transactions/${invalidId}`);

    // verifica se o status é 404 e se a mensagem de erro está correta
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: "Transaction not found" });
  });
});

