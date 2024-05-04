import express, { Router } from "express";
import orderDetailController from "../getOrderDetail/controller";

const orderDetailRouter = express.Router();

orderDetailRouter.get("/", orderDetailController);

export default orderDetailRouter;
