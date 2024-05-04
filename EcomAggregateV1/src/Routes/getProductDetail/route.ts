import express, { Router } from "express";
import productDetailControler from "./controller";

const productDetailController = express.Router();

productDetailController.get("/", productDetailControler);

export default productDetailController;
