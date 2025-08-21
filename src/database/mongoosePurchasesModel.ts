import mongoose, { Schema, Document } from 'mongoose';

export interface IPurchaseItem {
  productId: string;
  quantity: number;
  name: string;
  price: number;
}

export interface IPurchases extends Document {
  id?: string;
  date: string;
  total: number;
  items: IPurchaseItem[];
}

const PurchasesSchema: Schema = new Schema({
  date: { type: String, required: true, default: Date.now },
  total: { type: Number, required: true },
  items: [{
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
  }],
});

export const PurchasesModel = mongoose.model<IPurchases>('Purchases', PurchasesSchema);