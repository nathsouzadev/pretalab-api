import { getAllProduct } from "../../src/services/products-service";
import nock from "nock";

describe("GET Products Service", () => {
    const mockProducts = [
        {
            "id": "1",
            "name": "Notebook Gamer Pro",
            "price": 7500
        }
    ];
    it("Returning all products", async () => {
        nock("https://pretalab-api-439254010866.us-central1.run.app")
            .get("/products")
            .reply(200, {data: mockProducts})

        const products = await getAllProduct();

        expect(products).toEqual(mockProducts)
    })
})