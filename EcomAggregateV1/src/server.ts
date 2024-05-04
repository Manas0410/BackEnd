import express, { Request, Response } from "express";

const app = express();
const port: number = 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("api is working");
});

app.listen(port, () => {
  console.log("app is running on http://localhost:3000");
});

