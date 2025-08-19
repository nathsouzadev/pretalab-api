
import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {

    id?: string;
    name: string;
    price: number;

}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true},
  price: { type: String, required: true },
});

export const ProductModel = mongoose.model<IProduct>('Product', ProductSchema);