import request from "supertest";
import mongoose from 'mongoose';
import app from "../../src/index";
// import {TransactionsModel} from "../../src/database/MongooseTransactionModel";

describe("Transactions API - Integrations", () => {

  // beforeAll(async () => {
  //   await mongoose.createConnection(process.env.MONGO_URL_TESTE!);
  // });

  // afterAll(async () => {
  //   await TransactionsModel.deleteMany({});
  //   await mongoose.connection.close();
  // }); 
  it("should return a 200 status code", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toEqual("Transactions API v1");
  });
});
