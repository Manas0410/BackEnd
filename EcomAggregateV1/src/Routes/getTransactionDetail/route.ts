import express, { Router } from "express";
import transactionDetailControler from "./controller";

const transactionDetailRouter = express.Router();

transactionDetailRouter.get("/", transactionDetailControler);

export default transactionDetailRouter;
