import { PurchasesService } from "../../src/services/purchases-service";
import { IPurchases } from "../../src/database/mongoosePurchasesModel";

const mockPurchasesRepository = {
    createPurchases: jest.fn(),
    getAllPurchases: jest.fn(),
    getPurchasesById: jest.fn(),
};


const purchasesService = new PurchasesService(mockPurchasesRepository as any);

describe("PurchasesService", () => {
    it("deve puxar e retornar uma lista de compras", async () => {

        const purchasesList: IPurchases[] = [
            {
                _id: "68a4a5b91c6914647640b213" as any,
                date: "2024-07-28T14:45:12Z",
                total: 7850,
                items: [
                    {
                        productId: 1,
                        quantity: 1,
                        name: "Notebook Gamer Pro",
                        price: 7500,
                        _id: "68a4a5b91c6914647640b214" as any,
                    }
                ],
                __v: 0,
            } as any,
            {
                _id: "68a4a5b91c6914647640b215" as any,
                date: "2024-07-29T10:00:00Z",
                total: 120,
                items: [
                    {
                        productId: 2,
                        quantity: 2,
                        name: "Teclado Mecânico",
                        price: 60,
                        _id: "68a4a5b91c6914647640b216" as any,
                    }
                ],
                __v: 0,
            } as any,
        ];

        mockPurchasesRepository.getAllPurchases.mockResolvedValue(purchasesList);

        const result = await purchasesService.getAllPurchases();

        expect(result).toEqual(purchasesList);
    });
});