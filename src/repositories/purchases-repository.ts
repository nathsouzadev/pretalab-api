import { PurchasesModel, IPurchases } from "../database/mongoosePurchasesModel";

export class PurchasesRepository {
    public async getAllPurchases(): Promise<IPurchases[]> {
        return await PurchasesModel.find();
    }

    public async getPurchasesById(id: string): Promise<IPurchases | null> {
        return await PurchasesModel.findById(id);   
    }

    public async createPurchases(data: Omit<IPurchases, 'id'>): Promise<IPurchases> {
        const newPurchases= new PurchasesModel(data);
        return await newPurchases.save();
    }
}