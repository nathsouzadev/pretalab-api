import request from "supertest";
import app from "../../src/index";
import { transactions } from "../../src/data";

describe("Transactions API", () => {
  it("should return all transactions", async () => {
    const response = await request(app).get("/transactions");
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(transactions);
  });

  it("should return a transaction by id", async () => {
    const response = await request(app).get("/transactions/1");
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(transactions[0]);
  });

  it("should create a new transaction", async () => {
    const response = await request(app).post("/transactions").send({
      date: "2024-07-15T10:00:00Z",
      description: "Salário de Julho/24",
      amount: 5000,
      type: "income",
      category: "Salário",
    });
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: expect.any(String),
      date: "2024-07-15T10:00:00Z",
      description: "Salário de Julho/24",
      amount: 5000,
      type: "income",
      category: "Salário",
    });
  });
});
