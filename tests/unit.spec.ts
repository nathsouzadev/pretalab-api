import request from "supertest";
import app from "../src/index";

describe("Rota inicial", () => {
  it("Retornar a mensagem correta", async () => {
    const response = await request(app).get("/");
    expect(response.body.message).toBe("Transactions API");
  });
});