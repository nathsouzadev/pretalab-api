import express from "express";
import { PurchasesService } from "../services/purchases-service";
import { PurchasesController } from "../controllers/purchases-controller";
import { PurchasesRepository } from "../repositories/purchases-repository";

var router = express.Router();

const purchasesRepository = new PurchasesRepository();
const purchasesService = new PurchasesService(purchasesRepository);
const purchasesController = new PurchasesController(purchasesService);

router.post("/checkout", (req, res) => {
    purchasesController.createPurchases(req, res);
});

router.get("/purchases", (req, res) => {
    purchasesController.getAllPurchases(req, res);
});

router.get("/purchases/:id", (req, res) => {
    purchasesController.getPurchasesById(req, res);
});

export default router;
