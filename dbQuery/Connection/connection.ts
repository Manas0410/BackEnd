import { connect } from "mongoose";

export const connectToMongoDb = async (): Promise<void> => {
  try {
    await connect("mongodb://127.0.0.1:27017/mongotestdbuser");
    console.log("Database connected successfully");
  } catch (err: any) {
    console.error(err);
  }
};
