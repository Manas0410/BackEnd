import { Request, Response } from "express";
import { ProductModel } from "../../../TableSchemas/ProductsTableSchema";

const productDetailControler = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data = await ProductModel.aggregate([
      {
        $match: {
          productId: productId,
        },
      },
    ]).exec();

    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
};

export default productDetailControler;
