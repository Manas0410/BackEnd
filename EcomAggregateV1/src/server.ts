import express, { Request, Response } from "express";
import transactionDetailRouter from "./Routes/getTransactionDetail/route";
import orderDetailRouter from "./Routes/getOrderDetail/route";
import { connectToMongoDb } from "../Utils/connection";
import productDetailRouter from "./Routes/getProductDetail/route";

const server = async (): Promise<void> => {
  try {
    await connectToMongoDb();

    const app = express();
    const port = 3000;

    app.use(express.json());

    app.get("/", (req: Request, res: Response) => {
      res.status(200).send("api is working");
    });

    app.use("/getOrderDetails", orderDetailRouter);
    app.use("/getTransactionDetails", transactionDetailRouter);
    app.use("/getProductDetails", productDetailRouter);

    app.listen(port, () => {
      console.log("app is running on http://localhost:3000");
    });
  } catch (err: any) {
    console.error(err);
  }
};

server();
