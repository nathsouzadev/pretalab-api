import { Request, Response } from 'express';
import { ProductService } from '../services/products-service';

export class ProductController {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  public async getAllProduct(_req: Request, res: Response): Promise<void> {
    const products = await this.productService.getAllProduct();
    res.status(200).json(products);
  }

}