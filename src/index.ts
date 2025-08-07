import express from "express";
import { transactions } from "./data";

const app = express();

app.get("/", (_req, res) => {
  res.json({ message: " Transactions API " });
});

app.get("/transactions", (_req, res) => {
  res.json({ transactions });
});

export default app;
