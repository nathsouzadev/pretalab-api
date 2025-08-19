import express from 'express';
import { ProductService } from '../services/products-service';
import { ProductController } from '../controllers/products-controller';
import { ProductRepository } from '../repositories/product-repository';

var router = express.Router();

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

router.get("/products", (req, res) => {
    productController.getAllProduct(req,res);
})

export default router;