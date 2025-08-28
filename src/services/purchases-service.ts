import { IPurchases } from "../database/mongoosePurchasesModel";
import { PurchasesRepository } from "../repositories/purchases-repository";


export class PurchasesService {
  private purchasesRepository: PurchasesRepository;

  constructor(purchasesRepository: PurchasesRepository) {
    this.purchasesRepository = purchasesRepository;
  }

  public async getPurchasesById(id: string): Promise<IPurchases | null> {
    return await this.purchasesRepository.getPurchasesById(id);
  }

  public async getAllPurchases(): Promise<IPurchases[]> {
    return await this.purchasesRepository.getAllPurchases();
  }

  public async createPurchases(data: Omit<IPurchases, 'id'>): Promise<IPurchases> {
    return await this.purchasesRepository.createPurchases(data);
  }
}