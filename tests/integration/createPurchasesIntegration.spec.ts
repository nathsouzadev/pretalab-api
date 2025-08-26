import request from "supertest";
import app from "../../src/index";
import mongoose from "mongoose";
import { PurchasesModel } from '../../src/database/mongoosePurchasesModel';

describe("Create Checkout API", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL!);
    });

    afterEach(async () => {
        await PurchasesModel.deleteMany({});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });


    it("should create a new checkout and return it with a 201 status code", async () => {
        const newCheckout = {
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