import request from "supertest";
import app from "../../src/index";
import { purchases } from "../../src/data";

describe("Purchases API", () => {
  it("should return all purchases", async () => {
    const response = await request(app).get("/purchases");
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(purchases);
  });

  it("should return a purchase by id", async () => {
    const response = await request(app).get("/purchases/1");
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(purchases[0]);
  });

  it("should create a new purchase", async () => {
    const response = await request(app).post("/purchases").send({
      date: "2024-07-15T10:00:00Z",
      total: 5000,
      items: [],
    });
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: expect.any(String),
      date: "2024-07-15T10:00:00Z",
      total: 5000,
      items: [],
    });
  });
});
