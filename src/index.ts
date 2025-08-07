import express from "express";
import { transactions } from "./data";

const app = express();

app.get("/", (_req, res) => {
  res.json({ message: "Transactions API v1" });
});

app.get("/transactions", (_req, res) => {
  res.json({ transactions });
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
