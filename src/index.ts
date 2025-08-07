import express from "express";
import { transactions } from "./data";
import { GetTransactionByIdController } from "../src/controllers/GetTransactionByIdController";

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Transactions API v1" });
});

app.get("/transactions", (req, res) => {
  res.json({ transactions });
});

app.get("/transactions/:id", (req, res ) => 
  GetTransactionByIdController(req, res));




app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
