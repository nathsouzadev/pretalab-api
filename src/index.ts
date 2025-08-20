import express from "express";
import {
  byId as byIdTransaction,
  all as allTransaction,
  create as createTransaction,
} from "./controller/transaction";
import {
  byId as byIdPurchase,
  all as allPurchase,
  create as createPurchase,
} from "./controller/purchase";
import { all as allProduct } from "./controller/product";
import { aiResponse } from "./controller/ai";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Transactions API" });
});

app.get("/transactions", (req, res) => allTransaction(req, res));

app.get("/transactions/:id", (req, res) => byIdTransaction(req, res));

app.post("/transactions", (req, res) => createTransaction(req, res));

app.get("/purchases", (req, res) => allPurchase(req, res));

app.get("/purchases/:id", (req, res) => byIdPurchase(req, res));

app.post("/purchases", (req, res) => createPurchase(req, res));

app.get("/products", (req, res) => allProduct(req, res));

app.post("/ai", async (req, res) => aiResponse(req, res));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
