import express from "express";
import { connectToMongoDb } from "./Connection/connection";
import NoteRouter from "./route";

const server = async (): Promise<void> => {
  try {
    await connectToMongoDb();

    const app = express();
    const port = 3000;

    app.use(express.json());

    app.get("/", (req, res) => {
      res.status(200).send("api is working");
    });

    app.use("/note", NoteRouter);

    app.listen(port, () => {
      console.log("app is running on http://localhost:3000");
    });
  } catch (err: any) {
    console.error(err);
  }
};

server();
