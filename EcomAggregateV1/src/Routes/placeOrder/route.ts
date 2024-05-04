import express, { Router } from "express";
import placeOrderController from "./controller";

const placeOrderRouter = express.Router();

placeOrderRouter.post("/:orderId", placeOrderController);

export default placeOrderRouter;
