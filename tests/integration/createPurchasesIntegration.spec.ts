import request from "supertest";
import app from "../../src/index";

describe("Create Checkout API", () => {
    it("should create a new checkout and return it with a 201 status code", async () => {
        const newCheckout = {
            "date": "2024-07-28T14:45:12Z",
            "total": 7850,
            "items": [
                {
                    "productId": "1",
                    "quantity": 1,
                    "name": "Notebook Gamer Pro",
                    "price": 7500
                }
            ]
        };

        const response = await request(app)
            .post("/checkout")
            .send(newCheckout);

        expect(response.status).toBe(201);
        expect(response.body).toMatchObject(newCheckout);
        expect(response.body).toHaveProperty('_id');
    });
});