import request from "supertest";
import app from "../../src/index";

describe("Transactions API - Integrations", () => {
  it("should return a 200 status code", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toEqual("Transactions API v1");
  });
});
