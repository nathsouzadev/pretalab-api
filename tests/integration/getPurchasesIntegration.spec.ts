import request from 'supertest';
import app from '../../src/index';
import { PurchasesRepository } from '../../src/repositories/purchases-repository';

jest.mock('../../src/repositories/purchases-repository', () => {
    const mockPurchasesRepository = {
        getAllPurchases: jest.fn(),
    };

    return {
        PurchasesRepository: jest.fn().mockImplementation(() => {
            return mockPurchasesRepository;
        }),
    };
});

describe('Get Integration Products', () => {
    let purchasesRepositoryMocked: PurchasesRepository;

    beforeAll(() => {
        purchasesRepositoryMocked = new PurchasesRepository();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('GET /purchases deve retornar 200 e uma lista de compras do banco de dados', async () => {
        const mockPurchases = [
            {
                _id: "68a4a5b91c6914647640b213" as any,
                date: "2024-07-28T14:45:12Z",
                total: 7850,
                items: [
                    {
                        productId: 1,
                        quantity: 1,
                        name: "Notebook Gamer Pro",
                        price: 7500,
                        _id: "68a4a5b91c6914647640b214" as any,
                    }
                ],
                __v: 0,
            } as any,
            {
                _id: "68a4a5b91c6914647640b215" as any,
                date: "2024-07-29T10:00:00Z",
                total: 120,
                items: [
                    {
                        productId: 2,
                        quantity: 2,
                        name: "Teclado Mecânico",
                        price: 60,
                        _id: "68a4a5b91c6914647640b216" as any,
                    }
                ],
                __v: 0,
            } as any,
        ];

        (purchasesRepositoryMocked.getAllPurchases as jest.Mock).mockResolvedValue(mockPurchases);

        const response = await request(app).get('/purchases');

        expect(purchasesRepositoryMocked.getAllPurchases).toHaveBeenCalledTimes(1);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockPurchases);
    });
});