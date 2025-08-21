import request from 'supertest';
import nock from 'nock';
import app from '../../src/index';

describe('GET Products Integration', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('GET eturning all products', async () => {
        const mockProducts = [
            { id: '1', name: 'Celular', price: 5000 },
            { id: '2', name: 'Notebook', price: 15000 },
        ];

        nock('https://pretalab-api-439254010866.us-central1.run.app')
            .get('/products')
            .reply(200, {data: mockProducts});

        const response = await request(app).get('/products');

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(mockProducts);
    });
});
