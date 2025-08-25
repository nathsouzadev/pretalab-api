import express from "express";
import cors from "cors";

import transactionRoutes from "./routes/transaction-routes";
import aiRoutes from "./routes/ai-routes";
import productRoutes from "./routes/product-routes";
import purchasesRoutes from "./routes/purchases-routes"

const app = express();

app.use(express.json());
app.use(cors());
app.use(transactionRoutes)
app.use(aiRoutes)
app.use(productRoutes)
app.use(purchasesRoutes)

export default app;