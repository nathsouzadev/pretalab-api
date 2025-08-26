import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import { connectToMongo } from "./database/mongooseConnection";

import transactionRoutes from "./routes/transaction-routes";
import aiRoutes from "./routes/ai-routes";
import productRoutes from "./routes/product-routes";
import purchasesRoutes from "./routes/purchases-routes"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(transactionRoutes)
app.use(aiRoutes)
app.use(productRoutes)
app.use(purchasesRoutes)

export default app;

const MONGO_URL = process.env.MONGO_URL;


if (!MONGO_URL) {
    console.error("Error: The MongoDB connection URL is not defined. Please check your .env or .env.test file.");
    process.exit(1); 
}

connectToMongo(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`O servidor está rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Falha ao iniciar o servidor devido a um erro de conexão com o banco de dados.", err);
    process.exit(1);
  });
