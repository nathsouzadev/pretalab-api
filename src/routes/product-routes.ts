import express from 'express';
import { ProductController } from '../controllers/products-controller';

const router = express.Router();
const productController = new ProductController()

router.get("/products", (req, res) => {
    productController.getAllProduct(req, res);
});

export default router;