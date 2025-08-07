import { request } from "express";
import app from "../../src/index";

describe('Transactions API unit', () =>{

    it('deve iniciar servidor com sucesso', async () => {
        const res = await app.get("/");

        expect(res.status).toBe(200);
        expect(res.body).toBe("Transactions API v1");
        // expect(true).toEqual(true);
    });
    
});