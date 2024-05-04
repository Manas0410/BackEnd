import mongoose, { Schema, Document } from "mongoose";

// Define the interface for Order
export interface Order {
  orderId: string;
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
  total: number;
  status: string;
}

// Define the interface for OrderDocument (extends Order and Document)
export interface OrderDocument extends Order, Document {}

// Define the schema for Order
const orderSchema: Schema<OrderDocument> = new Schema({
  orderId: { type: String, required: true },
  userId: { type: String, required: true },
  products: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  status: { type: String, required: true },
});

// Create and export the Order model
export const OrderModel = mongoose.model<OrderDocument>("orders", orderSchema);
