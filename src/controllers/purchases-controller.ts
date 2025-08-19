import { Request, Response } from 'express';
import { PurchasesService } from '../services/purchases-service';

export class PurchasesController {
  private purchasesService: PurchasesService;

  constructor(purchasesService: PurchasesService) {
    this.purchasesService = purchasesService;
  }

  public async getAllPurchases(_req: Request, res: Response): Promise<void> {
    const purchases = await this.purchasesService.getAllPurchases();
    res.json(purchases);
  }

  public async createPurchases(req: Request, res: Response): Promise<void> {
    const newPurchases = await this.purchasesService.createPurchases(req.body);
    res.status(201).json(newPurchases);
  }

  public async getPurchasesById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const purchases = await this.purchasesService.getPurchasesById(id);

    if (!purchases) {
      res.status(404).json({ message: "Purchases not found." });
      return;
    }

    res.json(purchases);
  }
}