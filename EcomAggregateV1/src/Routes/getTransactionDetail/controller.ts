import { Request, Response } from "express";
import { pipeline } from "stream";

const transactionDetailControler = (req: Request, res: Response) => {
  const { transactionId } = req.params;
};

export default transactionDetailControler;

db.transactions.aggregate([
  {
    $match: {
      transactionId: "301",
    },
  },
  {
    $lookup: {
      from: "orders",
      localField: "orderId",
      foreignField: "orderId",
      as: "orderDetails",
    },
  },
  {
    $lookup: {
      from: "users",
      let: {
        integerOrderDetailUserId: {
          $toInt: { $first: "$orderDetails.userId" },
        },
      },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$$integerOrderDetailUserId", "$userID"] },
          },
        },
      ],
      as: "userDetails",
    },
  },
]);
