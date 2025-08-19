import { IProducts } from "../database/productsBaseDefined";
import { ProductRepository } from "../repositories/product-repository";

export class ProductService {
    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    public async getAllProduct(): Promise<IProducts[]> {
        return await this.productRepository.getAllProduct();
    }
}