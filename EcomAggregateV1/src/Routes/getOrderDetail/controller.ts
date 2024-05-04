import { Request, Response } from "express";
import { pipeline } from "stream";

const orderDetailController = (req: Request, res: Response) => {
  const { orderId } = req.params;
};

export default orderDetailController;

db.orders.aggregate([
  {
    $match: {
      orderId: "201",
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
]);
