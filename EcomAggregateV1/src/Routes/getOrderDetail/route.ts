import express, { Router } from "express";
import orderDetailController from "../getOrderDetail/controller";

const orderDetailRouter = express.Router();

orderDetailRouter.get("/:orderId", orderDetailController);

export default orderDetailRouter;
