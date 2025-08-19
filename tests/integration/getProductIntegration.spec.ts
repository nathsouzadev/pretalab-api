import request from 'supertest';
import app from '../../src/index';
import { ProductRepository } from '../../src/repositories/product-repository';

jest.mock('../../src/repositories/product-repository', () => {
    const mockProductRepository = {
        getAllProduct: jest.fn(),
    };

    return {
        ProductRepository: jest.fn().mockImplementation(() => {
            return mockProductRepository;
        }),
    };
});

describe('Get Integration Products', () => {
    let productRepositoryMocked: ProductRepository;

    beforeAll(() => {
        productRepositoryMocked = new ProductRepository();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('GET /products deve retornar 200 e uma lista de produtos do banco de dados', async () => {
        const mockProducts = [
            { _id: '1', name: 'Celular', price: 5000 },
            { _id: '2', name: 'Notebook', price: 15000 },
        ];

        (productRepositoryMocked.getAllProduct as jest.Mock).mockResolvedValue(mockProducts);

        const response = await request(app).get('/products');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockProducts);

        expect(productRepositoryMocked.getAllProduct).toHaveBeenCalledTimes(1);
    });
});