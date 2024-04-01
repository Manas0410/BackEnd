import Express, { Router } from "express";
import { Request, Response } from "express";
import { signinUser } from "./signin.controler";

const signinRouter: Router = Express.Router();

signinRouter.post("/", (req: Request, res: Response) => {
  signinUser(req, res);
});

export default signinRouter;
