import express from "express";
import { transactions } from "./data";
import { mongoConnect } from '../src/database/MongooseConnection';
import { CreateTransactionController, GetTransactionByIdController } from "../src/controllers/transactionControllers";

const app = express();
app.use(express.json());

const url = process.env.MONGO_URL;

app.get("/", (req, res) => {
  res.json({ message: "Transactions API v1" });
});

app.get("/transactions", (req, res) => {
  res.json({ transactions });
});

app.get("/transactions/:id", (req, res) => 
  GetTransactionByIdController(req, res));

app.post("/transactions", (req, res) => 
  CreateTransactionController(req, res));

mongoConnect();


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
