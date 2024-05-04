import mongoose, { Schema, Document } from "mongoose";

export interface Product {
  productId: string;
  name: string;
  price: number;
  description: string;
}

export interface ProductDocument extends Product, Document {}

const productSchema: Schema<ProductDocument> = new Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

export const ProductModel = mongoose.model<ProductDocument>(
  "products",
  productSchema
);
