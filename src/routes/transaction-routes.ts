import express from 'express';
import { TransactionService } from "../services/transactions-service";
import { TransactionController } from "../controllers/transactions-controller";
import { TransactionRepository } from "../repositories/transaction-repository";

var router = express.Router();

const transactionRepository = new TransactionRepository();
const transactionService = new TransactionService(transactionRepository);
const transactionController = new TransactionController(transactionService);

router.get("/", (_req, res) => {
  res.json({ message: "Transactions API with Mongoose" });
});

router.get("/transactions/:id", (req, res) => {
  transactionController.getTransactionId(req, res);
});

router.get("/transactions", (req, res) => {
  transactionController.getAllTransactions(req, res);
});

router.post("/transactions", (req, res) => {
  transactionController.createTransactions(req, res);
});

export default router;

