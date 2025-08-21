import { Request, Response } from 'express';
import { getAllProduct } from '../services/products-service';

export class ProductController {

  public async getAllProduct(_req: Request, res: Response): Promise<void> {
    const products = await getAllProduct();
    res.status(200).json(products);
  }
}