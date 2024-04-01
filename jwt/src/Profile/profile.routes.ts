import Express, { Router } from "express";
import { getUserDetails } from "./profile.controller";

const profileRouter: Router = Express.Router();

profileRouter.get("/", getUserDetails);

export default profileRouter;
