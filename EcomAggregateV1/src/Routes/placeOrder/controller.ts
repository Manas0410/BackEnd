import { Request, Response } from "express";

const placeOrderController = async (req: Request, res: Response) => {
  try {
    const { userId, productId } = req.body();
  } catch (err) {
    console.log(err);
  }
};

export default placeOrderController;
