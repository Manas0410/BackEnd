import mongoose, { Schema, Document } from "mongoose";

interface User {
  userId: string;
  name: string;
  email: string;
  address: string;
}
interface userdataschema extends User, Document {}

const userSchema: Schema = new mongoose.Schema<User>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
});

export const UserModel = mongoose.model<userdataschema>("users", userSchema);
