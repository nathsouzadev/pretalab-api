import { TransactionService } from "../../src/services/transactions-service";
import { transactions, Transaction } from "../../src/data";

describe("TransactionService", () => {
    it("deve criar e retornar uma nova transação", async () => {
        const tamanhoInicial = transactions.length;
        const transactionService = new TransactionService();

        const newTransaction: Transaction = {
            id: "21",
            date: "2024-08-07T10:00:00Z",
            description: "Nova Compra",
            amount: 50,
            type: "expense",
            category: "Alimentaçã",
        };

        const transactionCreated = await transactionService.createTransaction(newTransaction);

        expect(transactions.length).toBe(tamanhoInicial + 1);
        expect(transactions[transactions.length - 1]).toEqual(newTransaction); 
        expect(transactionCreated).toEqual(newTransaction);

        transactions.pop();
    });
});