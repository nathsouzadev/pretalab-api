import express from "express";
import { transactions } from "./data";

const app = express();

app.get("/", (_req, res) => {
  res.json({ message: "Transactions API v1" });
});

app.get("/transactions", (_req, res) => {
  res.json({ transactions });
});

// rota para buscar transação por ID
app.get("/transactions/:id", (req, res) => {
  const { id } = req.params; // 1. Pega o ID da URL

  // procurar a transação na lista
  const transaction = transactions.find((t) => t.id === id);

  // verifica se a transação foi encontrada
  if (transaction) {
    return res.status(200).json(transaction);
  }
  return res.status(404).json({ message: "Transaction not found" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
