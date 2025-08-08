import { request } from "express";
import transactionService from "../../src/service/transactionService";
import app from "../../src/index";

describe('Transactions API unit', () =>{

    it('deve criar uma transação com sucesso', async () => {
         const newTransact = transactionService.createTransactions({
            id: "12",
            date: "2024-07-15T10:00:00Z",
            description: "Despesas com remédios",
            amount: 40.5,
            type: "expense",
            category: "Saúde",
         });

         expect(newTransact).toMatchObject({ transaction: newTransact });

    });

    it('deve retornar erro caso um dos campos não esteja preenchido', async () => {
        const newTransact = transactionService.createTransactions({
            id: "12",
            date: "2024-07-15T10:00:00Z",
            description: "",
            amount: 0,
            type: "expense",
            category: "",
         });

         if(!newTransact.description || !newTransact.amount || !newTransact.category) {
            expect(newTransact).rejects.toThrow('Todos os campos devem estar preenchidos');
         };
    });

    
});