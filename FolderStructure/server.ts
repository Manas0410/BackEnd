import express from "express";
import todoRoute from "./src/features/TODOs/todos.routes";

const server: () => void = () => {
  try {
    const app = express();
    const port = 3000;

    app.get("/", (req, res) => {
      res.status(200).send("api is working");
    });

    app.use("/todoData", todoRoute);
    app.listen(port, () => {
      console.log("app is running on http://localhost:3000");
    });
  } catch (err) {
    console.log(err);
  }
};

server();
