import app from "../../src/index";
import request from "supertest";

describe("GET /transactions", () => {
    it("deve retornar a lista de transações", async () => {
        const response = await request(app).get("/transactions");
        expect(response.statusCode).toBe(200);
    });
});