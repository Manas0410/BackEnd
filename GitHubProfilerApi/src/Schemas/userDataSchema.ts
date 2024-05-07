import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
  id: number;
  login: string;
  name: string;
  location?: string;
  email?: string;
  bio?: string;
  followers?: number;
  following?: number;
  repos_url?: string;
}

const userSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  login: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String },
  email: { type: String },
  bio: { type: String },
  followers: { type: Number },
  following: { type: Number },
  repos_url: { type: String },
});

const UserModel = mongoose.model<User>("users", userSchema);

export default UserModel;
