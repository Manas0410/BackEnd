import mongoose, { Schema, Document } from "mongoose";

// Define the interface for Transaction
export interface Transaction {
  transactionId: string;
  orderId: string;
  amount: number;
  status: string;
  paymentMethod: string;
  transactionDate: Date;
}

// Define the interface for TransactionDocument (extends Transaction and Document)
export interface TransactionDocument extends Transaction, Document {}

// Define the schema for Transaction
const transactionSchema: Schema<TransactionDocument> = new Schema({
  transactionId: { type: String, required: true },
  orderId: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  transactionDate: { type: Date, required: true },
});

// Create and export the Transaction model
export const TransactionModel = mongoose.model<TransactionDocument>(
  "transactions",
  transactionSchema
);
