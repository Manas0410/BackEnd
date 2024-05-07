import express, { Request, Response } from "express";
import { connectToMongoDb } from "./src/utils/connection";
import userDetailRouter from "./src/API/getUserDetails/router";
import limiter from "./src/utils/rateLimiter";
import { fetchUserProfile } from "./src/utils/fetchGithubData/fetchUserDetailFromGithub";

(async (): Promise<void> => {
  try {
    await connectToMongoDb();

    const app = express();
    const port = 3000;

    app.use(limiter);
    app.use(express.json());

    const data = await fetchUserProfile("manas0410");

    app.get("/", (req: Request, res: Response) => {
      res.status(200).send(data);
    });

    app.use("/githubprofile", userDetailRouter);

    app.listen(port, () => {
      console.log("app is running on http://localhost:3000");
    });
  } catch (err: any) {
    console.error(err, "this is error");
  }
})();
