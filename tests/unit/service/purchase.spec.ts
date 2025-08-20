import {
  create,
  purchaseById,
  purchases,
} from "../../../src/service/purchases";
import { purchases as purchasesData } from "../../../src/data";

describe("Purchase Service", () => {
  it("should be able to get all purchases", () => {
    const result = purchases();

    expect(result).toEqual(purchasesData);
  });

  it("should be able to get a purchase by id", () => {
    const purchase = create({
      date: "2024-07-15T10:00:00Z",
      total: 5000,
      items: [],
    });

    const result = purchaseById(purchase.id);

    expect(result).toMatchObject(purchase);
  });

  it("should be able to create a purchase", () => {
    const purchase = create({
      date: "2024-07-15T10:00:00Z",
      total: 5000,
      items: [],
    });

    expect(purchase).toMatchObject({
      id: expect.any(String),
      date: "2024-07-15T10:00:00Z",
      total: 5000,
      items: [],
    });
  });
});
