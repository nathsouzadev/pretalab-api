import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

export const productModel = mongoose.model('Product', productSchema);