import { Schema, model, Document } from 'mongoose';

export const transactionSchema: Schema = new Schema({
    date: {type: Date, required: true},
    description: {type: String, required: true},
    amount: {type: Number, required: true},
    type: {type: String, required: true, enum: ["income", "expense"] },
    category: {type: String, required: true},
});

export interface ITransaction extends Document {
    id?: string;
    date: Date;
    description: string;
    amount: number;
    type: "income" | "expense";
    category: string;
}


export const TransactionsModel = model<ITransaction>('Transaction', transactionSchema);