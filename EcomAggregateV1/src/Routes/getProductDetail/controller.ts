import { Request, Response } from "express";
import { pipeline } from "stream";

const productDetailControler = (req: Request, res: Response) => {
  const { productId } = req.params;
};

export default productDetailControler;
