import express, { Router } from "express";
import placeOrderController from "./controller";

const placeOrderRouter = express.Router();

placeOrderRouter.get("/:orderId", placeOrderController);

export default placeOrderRouter;
