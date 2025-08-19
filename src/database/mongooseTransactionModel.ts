import mongoose, { Schema, Document } from 'mongoose';

export interface ITransaction extends Document {
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
}

const TransactionSchema: Schema = new Schema({
  date: { type: String, required: true, default: Date.now },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true, enum: ["income", "expense"] },
  category: { type: String, required: true },
});

export const TransactionModel = mongoose.model<ITransaction>('Transaction', TransactionSchema);