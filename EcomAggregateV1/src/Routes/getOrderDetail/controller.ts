import { Request, Response } from "express";
import { OrderModel } from "../../../TableSchemas/OrdersTableSchema";

const orderDetailController = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const data = await OrderModel.aggregate([
      {
        $match: {
          orderId: orderId,
        },
      },
      {
        $lookup: {
          from: "users",
          let: { constructtUserId: { $toInt: "$userId" } },
          pipeline: [
            { $match: { $expr: { $eq: ["$$constructtUserId", "$userId"] } } },
          ],
          as: "userInfo",
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "products.productId",
          foreignField: "productId",
          as: "productInfo",
        },
      },
      {
        $project: {
          _id: false,
          orderId: true,
          status: true,
          userName: { $first: "$userInfo.name" },
          userMail: { $first: "$userInfo.email" },
          userAddress: { $first: "$userInfo.address" },
          orderedProducts: {
            $map: {
              input: "$productInfo",
              as: "product",
              in: {
                name: "$$product.name",
                price: "$$product.price",
              },
            },
          },
        },
      },
    ]).exec(); // Add .exec() to execute the aggregation pipeline

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default orderDetailController;
