import dotenv from 'dotenv';
import express from "express";
import { TransactionService } from "./services/transactions-service";
import { TransactionController } from "./controllers/transactions-controller";
import { TransactionRepository } from "./repositories/transaction-repository";
import { aiResponse } from "./controllers/ai";
import { connectToMongo } from "./database/mongooseConnection";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const transactionRepository = new TransactionRepository();
const transactionService = new TransactionService(transactionRepository);
const transactionController = new TransactionController(transactionService);

app.use(express.json());

connectToMongo().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.get("/", (_req, res) => {
  res.json({ message: "Transactions API with Mongoose" });
});

app.get("/transactions/:id", (req, res) => {
  transactionController.getTransactionId(req, res);
});

app.get("/transactions", (req, res) => {
  transactionController.getAllTransactions(req, res);
});

app.post("/transactions", (req, res) => {
  transactionController.createTransactions(req, res);
});



export default app;