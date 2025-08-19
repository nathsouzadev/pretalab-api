import { ProductModel, IProduct } from "../database/mongooseProductModel";

export class ProductRepository {
    public async getAllProduct(): Promise<IProduct[]> {
        return await ProductModel.find();
    }

    public async getProductById(id: string): Promise<IProduct | null> {
        return await ProductModel.findById(id);
    }

    public async createProduct(data: Omit<IProduct, 'id'>): Promise<IProduct> {
        const newProduct = new ProductModel(data);
        return await newProduct.save();
    }
}