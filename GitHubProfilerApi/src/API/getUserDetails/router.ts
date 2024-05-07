import Express, { Router } from "express";
import validator from "./validator";
import Controller from "./controller";

const userDetailRouter: Router = Express.Router();

userDetailRouter.get("/:userName", validator, Controller);

export default userDetailRouter;
