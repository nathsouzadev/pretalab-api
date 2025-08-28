import request from "supertest";
import app from "../../src/index";
import mongoose from "mongoose";
import { HistoricoModel } from '../../src/database/mongooseGeminiModel';

describe('Chat Integration Test', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL!);
    });

    afterEach(async () => {
        await HistoricoModel.deleteMany({});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });
    it('should process a prompt via the /chat route and update the database', async () => {
        const prompt = 'Olá, Gemini!';

        const response = await request(app)
            .post('/chat')
            .send({ prompt });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('responseText');
        expect(response.body).toHaveProperty('context');
        expect(response.body.context[0]).toMatchObject({
            role: 'user',
            parts: [{ text: prompt }]
        });
    }, 200000);
})
