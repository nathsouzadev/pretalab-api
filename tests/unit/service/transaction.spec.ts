import {
  create,
  transactionById,
  transactions,
} from "../../../src/service/transactions";
import { transactions as transactionsData } from "../../../src/data";

describe("Transaction Service", () => {
  it("should be able to create a transaction", () => {
    const transaction = create({
      date: "2024-07-15T10:00:00Z",
      description: "Salário de Julho/24",
      amount: 5000,
      type: "income",
      category: "Salário",
    });

    expect(transaction).toMatchObject({
      id: expect.any(String),
      date: "2024-07-15T10:00:00Z",
      description: "Salário de Julho/24",
      amount: 5000,
      type: "income",
      category: "Salário",
    });
  });

  it("should be able to get a transaction by id", () => {
    const transaction = create({
      date: "2024-07-15T10:00:00Z",
      description: "Salário de Julho/24",
      amount: 5000,
      type: "income",
      category: "Salário",
    });

    const result = transactionById(transaction.id);

    expect(result).toMatchObject(transaction);
  });

  it("should be able to get all transactions", () => {
    const result = transactions();

    expect(result).toMatchObject(transactionsData);
  });
});
