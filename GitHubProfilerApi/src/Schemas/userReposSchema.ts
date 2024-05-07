import mongoose, { Schema, Document } from "mongoose";

interface Repository {
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

interface Record extends Document {
  repositories: Repository[][];
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

const recordSchema: Schema = new Schema({
  repositories: { type: [[repositorySchema]], required: true },
});

const RepositoryModel = mongoose.model<Record>("repos", recordSchema);

export default RepositoryModel;
