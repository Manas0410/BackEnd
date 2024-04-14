import mongoose, { Schema, Document } from "mongoose";

export interface NoteData {
  title: string;
  description: string;
  isActive: boolean;
}

export interface CodeDataDocument extends NoteData, Document {}

const codeDataSchema: Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const NoteDataModel = mongoose.model<CodeDataDocument>(
  "NoteData",
  codeDataSchema
);
