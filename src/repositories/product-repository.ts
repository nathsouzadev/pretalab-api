import { products, IProducts } from "../database/productsBaseDefined";

export class ProductRepository {
    public async getAllProduct(): Promise<IProducts[]> {
        return products;
    }

    public async getProductById(id: string): Promise<IProducts | null> {
        const product = products.find(p => p.id === id);
        return product || null;
    }
}