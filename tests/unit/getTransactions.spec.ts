import { getTransactionsById } from "../../src/services/transactionsService";

describe("Get Transactions by ID", () => {
    it("should return a transaction if it exists", () => {
        const transaction = getTransactionsById("1");
        expect(transaction).toBeDefined();
    });

    it("should return undefined if the transaction does not exist", () => {
        const transaction = getTransactionsById("non-existent-id");
        expect(transaction).toBeUndefined();
    });
});
