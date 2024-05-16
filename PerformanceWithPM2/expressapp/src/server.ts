import express, { Request, Response } from "express";

(async (): Promise<void> => {
  try {
    const app = express();
    const port = 3000;
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    app.use(express.json());

    app.get("/", (req: Request, res: Response) => {
      console.log(randomNumber);
      res.status(200).send("api is working");
    });

    app.listen(port, () => {
      console.log("app is running on http://localhost:3000");
    });
  } catch (err: any) {
    console.error(err);
  }
})();
