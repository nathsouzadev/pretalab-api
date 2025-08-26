import request from "supertest";
import app from "../../src/index";

describe("Create Transactions API", () => {
    it("should create a new transaction and return it with a 201 status code", async () => {
        const newTransaction = {
            date: "2024-08-07T10:00:00Z",
            description: "Nova Compra",
            amount: 50,
            type: "expense",
            category: "Alimentação",
        };

        const response = await request(app)
            .post("/transactions")
            .send(newTransaction);

        expect(response.status).toBe(201);


    });

});
