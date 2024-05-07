import mongoose, { Schema, Document } from "mongoose";

interface Repository extends Document {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
  };
  description: string | null;
  visibility: string;
}

const repositorySchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  full_name: { type: String, required: true },
  private: { type: Boolean, required: true },
  owner: {
    login: { type: String, required: true },
    id: { type: Number, required: true },
  },
  description: { type: String },
  visibility: { type: String, required: true },
});

const RepositoryModel = mongoose.model<Repository>("repos", repositorySchema);

export default RepositoryModel;
