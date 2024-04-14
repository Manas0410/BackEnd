import express from "express";
import route from "./Routes/route";

const server: () => void = () => {
  try {
    const app = express();
    const port = 3000;

    app.get("/", (req, res) => {
      res.status(200).send("api is working");
    });

    app.use("/timeOutApi", route);

    app.listen(port, () => {
      console.log("app is running on http://localhost:3000");
    });
  } catch (err) {
    console.log(err);
  }
};

server();
