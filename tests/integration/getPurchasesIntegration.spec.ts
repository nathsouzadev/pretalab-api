import request from 'supertest';
import app from '../../src/index';
import { PurchasesModel } from '../../src/database/mongoosePurchasesModel';
import mongoose from 'mongoose';

describe('Get Integration Purchases', () => {
            beforeAll(async () => {
            await mongoose.connect(process.env.MONGO_URL!);
        });
    
        afterEach(async () => {
            await PurchasesModel.deleteMany({});
        });
    
        afterAll(async () => {
            await mongoose.connection.close();
        });

    it('GET /purchases deve retornar 200 e uma lista de compras do banco de dados', async () => {
        const mockPurchases = [
            {
                total: 7850,
                items: [
                    {
                        productId: "1",
                        quantity: 1,
                        name: "Notebook Gamer Pro",
                        price: 7500,
                    }
                ]
            },
            {
                total: 120,
                items: [
                    {
                        productId: "2",
                        quantity: 2,
                        name: "Teclado Mecânico",
                        price: 60,
                    }
                ]
            }
        ];

        await PurchasesModel.insertMany(mockPurchases)

        const response = await request(app).get('/purchases');

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(mockPurchases);
    });
});