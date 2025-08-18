import { createTransaction } from "../../src/services/transactionsService";

describe("createTransaction", () => {
    it("should create a new transaction", () => {
        const newTransaction = {
            id: "1",
            date: new Date().toISOString(),
            description: "Compra no supermercado",
            amount: 100,
            type: "expense" as const,
            category: "Uncategorized"
        };

        const createdTransaction = createTransaction(newTransaction);

        expect(createdTransaction).toEqual(newTransaction);
    });
});
