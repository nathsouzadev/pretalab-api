import { Request, Response } from 'express';
import { ProductController } from "../../src/controllers/products-controller"
import { ProductService } from '../../src/services/products-service';
import { IProduct } from '../../src/database/mongooseProductModel';

describe("ProductController", () => {

    const mockProductService: Partial<ProductService> = {
        getAllProduct: jest.fn(),
    }

    const productController = new ProductController(mockProductService as ProductService)

    const mockRequest: Partial<Request> = {};
    const mockResponse: Partial<Response> = {
        json: jest.fn(),
        status: jest.fn(() => mockResponse as Response),
    }

    
    it("testar o get de product, retornando uma lista", async () => {

        const mockProduct = [
            { name: 'Celular', price: 5000 },
            { name: 'Notebook', price: 15000 },
        ];

        const createdProduct: IProduct = {
            ...mockProduct[0],
            _id: "21"
        } as IProduct;

        (mockProductService.getAllProduct as jest.Mock).mockResolvedValue(mockProduct);


        await productController.getAllProduct(mockRequest as Request, mockResponse as Response);

        expect(mockProductService.getAllProduct).toHaveBeenCalledTimes(1);
        expect(mockResponse.json).toHaveBeenCalledWith(mockProduct);

    });
});