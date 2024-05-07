import express, { Request, Response } from "express";
import { connectToMongoDb } from "./src/utils/connection";
import userDetailRouter from "./src/API/getUserDetails/router";
import limiter from "./src/utils/rateLimiter";
import { fetchUserProfile } from "./src/utils/fetchGithubData/fetchUserDetailFromGithub";
import { port } from "./src/Configuration/config";

(async (): Promise<void> => {
  try {
    await connectToMongoDb();

    const app = express();

    app.use(limiter);
    app.use(express.json());

    app.get("/", (req: Request, res: Response) => {
      res.status(200).send("api is running");
    });

    app.use("/githubprofile", userDetailRouter);

    app.listen(port, () => {
      console.log(`app is running on http://localhost:${port}`);
    });
  } catch (err: any) {
    console.error(err, "this is error");
  }
})();
