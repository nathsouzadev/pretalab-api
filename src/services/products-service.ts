import { IProduct } from "../database/mongooseProductModel";
import { ProductRepository  } from "../repositories/product-repository";

export class ProductService {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  public async getAllProduct(): Promise<IProduct[]> {
    return await this.productRepository.getAllProduct();
  }

}