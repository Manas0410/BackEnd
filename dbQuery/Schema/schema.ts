import mongoose, { Schema, Document } from "mongoose";

export interface userData {
  name: string;
  email: string;
  isActive: boolean;
}

export interface userDataDocument extends userData, Document {}

const userDataSchema: Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

export const NoteDataModel = mongoose.model<userDataDocument>(
  "UserData",
  userDataSchema
);
