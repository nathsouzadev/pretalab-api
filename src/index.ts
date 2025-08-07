import express from "express";
import { TransactionService } from "./services/transactions-service";
import { TransactionController } from "./controllers/transactions-controller";

const app = express();
const transactionService = new TransactionService();
const transactionController = new TransactionController(transactionService);

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Transactions API v2.1" });
});

app.get("/transactions/:id", (req, res) => {
  transactionController.getTransactionId(req, res)
});

app.get("/transactions", (req, res) => { 
  transactionController.getAllTransactions(req, res) 
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;