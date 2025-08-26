import request from "supertest";
import app from "../../src/index";

describe("Transactions API", () => {
  it("should return a 200 status code", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
