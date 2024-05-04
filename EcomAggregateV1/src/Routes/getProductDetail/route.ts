import express, { Router } from "express";
import productDetailControler from "./controller";

const productDetailRouter = express.Router();

productDetailRouter.get("/:productId", productDetailControler);

export default productDetailRouter;
