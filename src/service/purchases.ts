import { randomUUID } from "crypto";
import { Purchase, purchases as purchasesData } from "../data";

export const purchases = (): Purchase[] => {
  return purchasesData;
};

export const purchaseById = (id: string): Purchase | undefined => {
  return purchasesData.find((purchase) => purchase.id === id);
};

export const create = (purchase: Omit<Purchase, "id">): Purchase => {
  const newPurchase = {
    ...purchase,
    id: randomUUID(),
  };

  purchasesData.push(newPurchase);
  return newPurchase;
};
