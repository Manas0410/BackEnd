import express from "express";
import { connectToMongoDb } from "./Connection/connection";
import NoteRouter from "./route";
// import todoRoute from "./src/features/TODOs/todos.routes";

const server: () => void = async () => {
  try {
    await connectToMongoDb();

    const app = express();
    const port = 3000;

    app.use(express.json());

    app.get("/", (req, res) => {
      res.status(200).send("api is working");
    });

    app.use("/note", NoteRouter);

    // app.use("/todoData", todoRoute);

    app.listen(port, () => {
      console.log("app is running on http://localhost:3000");
    });
  } catch (err) {
    console.log(err);
  }
};

server();
