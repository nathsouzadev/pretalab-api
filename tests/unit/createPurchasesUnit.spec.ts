import { PurchasesService } from "../../src/services/purchases-service";
import { IPurchases } from "../../src/database/mongoosePurchasesModel";

describe("PurchasesService", () => {
    it("deve criar e retornar uma nova compra", async () => {
        const newPurchasesData = {
            "total": 7850,
            "items": [
                {
                    "productId": "1",
                    "quantity": 1,
                    "name": "Notebook Gamer Pro",
                    "price": 7500
                }
            ]
        };

        const createdPurchases: IPurchases = {
            ...newPurchasesData
        } as IPurchases;

        const mockPurchasesRepository = {
            createPurchases: jest.fn().mockResolvedValue(createdPurchases),
            getAllPurchases: jest.fn(),
            getPurchasesById: jest.fn(),
        };

        const purchasesService = new PurchasesService(mockPurchasesRepository as any);

        const result = await purchasesService.createPurchases(newPurchasesData as any);

        expect(mockPurchasesRepository.createPurchases).toHaveBeenCalledTimes(1);
        expect(mockPurchasesRepository.createPurchases).toHaveBeenCalledWith(newPurchasesData);
        expect(result).toEqual(createdPurchases);
    });
});