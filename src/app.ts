import express from "express";
import { transactions } from "./data";
import { getTransactionsById } from "./services/transactionsService";
import { createTransactionController } from "./controller/createTransaction";
import { aiResponse } from "./controller/ai";
import { aiResponseChat } from "./controller/aiChat";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Transactions API v2.5" });
});


app.get("/transactions", (_req, res) => {
  res.json({ transactions });
});


app.get("/transactions/:id", (req, res) => {
  const { id } = req.params;
  const transaction = getTransactionsById(id);
  if (!transaction) {
    return res.status(404).json({ message: "Transação não encontrada" });
  }
  res.json({ transaction });
});


app.post("/transactions", (req, res) => {
  createTransactionController(req, res);
});

app.post("/ai", (req, res) => {
  aiResponse(req, res);
});

app.post("/chat", (req, res) => {
  aiResponseChat(req, res);
});

export default app;
