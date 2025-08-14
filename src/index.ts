import express from "express";
import { transactions } from "./data";
import { mongoConnect } from '../src/database/MongooseConnection';
import { TransactionController } from "../src/controllers/transactionControllers";
import { TransactionService } from  "../src/service/transactionService";
import { TransactionRepository } from "../src/repository/transactionRepository";
// import { aiResponse } from "./controllers/ai";

const transactionRepository = new TransactionRepository();
const transactionService = new TransactionService(transactionRepository);
const transactionController = new TransactionController(transactionService);

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
transactionController.GetTransactionByIdController(req, res));

app.post("/transactions", (req, res) => 
transactionController.CreateTransactionController(req, res));

// app.post("/ai/chat", async (req, res) => {
//   const { prompt } = req.body;

//   res.json({ prompt });
// });

// app.post("/ai", async (req, res) => aiResponse(req, res));

// app.post('/chat', async (req, res) =>  );


mongoConnect();


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


export default app;