import express, { Request, Response } from "express";
import { leakyBucket } from "./LeakyBucket";

(async (): Promise<void> => {
  try {
    const app = express();
    const port = 3000;

    app.use(express.json());

    app.get("/", leakyBucket, (req: Request, res: Response) => {
      setTimeout(() => {
        res.status(200).send("api is working");
      }, 6000);
    });

    app.listen(port, () => {
      console.log("app is running on http://localhost:3000");
    });
  } catch (err: any) {
    console.error(err);
  }
})();
