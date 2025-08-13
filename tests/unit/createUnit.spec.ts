import { TransactionService } from "../../src/services/transactions-service";
import { ITransaction } from "../../src/database/mongooseTransactionModel";

describe("TransactionService", () => {
    it("deve criar e retornar uma nova transação", async () => {
        const newTransactionData = {
            date: new Date("2024-08-07T10:00:00Z"),
            description: "Nova Compra",
            amount: 50,
            type: "expense",
            category: "Alimentação",
        };

        const createdTransaction: ITransaction = {
            ...newTransactionData,
            _id: "21"
        } as ITransaction;

        const mockTransactionRepository = {
            createTransaction: jest.fn().mockResolvedValue(createdTransaction),
            getAllTransactions: jest.fn(),
            getTransactionById: jest.fn(),
        };

        const transactionService = new TransactionService(mockTransactionRepository as any);

        const result = await transactionService.createTransaction(newTransactionData as any);

        expect(mockTransactionRepository.createTransaction).toHaveBeenCalledTimes(1);
        expect(mockTransactionRepository.createTransaction).toHaveBeenCalledWith(newTransactionData);
        expect(result).toEqual(createdTransaction);
    });
});