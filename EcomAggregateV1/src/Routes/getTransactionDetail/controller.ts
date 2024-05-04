import { Request, Response } from "express";
import { TransactionModel } from "../../../TableSchemas/TransactionTableSchema";

const transactionDetailControler = async (req: Request, res: Response) => {
  try {
    const { transactionId } = req.params;
    const data = await TransactionModel.aggregate([
      {
        $match: {
          transactionId: transactionId,
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
        $unwind: "$orderDetails",
      },
      {
        $lookup: {
          from: "users",
          let: {
            userId: { $toInt: "$orderDetails.userId" },
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$userId", "$userId"],
                },
              },
            },
          ],
          as: "userDetails",
        },
      },
      {
        $project: {
          _id: 0,
          transactionId: 1,
          orderId: 1,
          amount: 1,
          status: 1,
          paymentMethod: 1,
          transactionDate: 1,
          "orderDetails.orderId": 1,
          "orderDetails.products": 1,
          "orderDetails.total": 1,
          "orderDetails.status": 1,
          "userDetails.userId": 1,
          "userDetails.name": 1,
          "userDetails.email": 1,
          "userDetails.address": 1,
        },
      },
    ]).exec();

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};

export default transactionDetailControler;

// db.transactions.aggregate([
//   {
//     $match: {
//       transactionId: "301",
//     },
//   },
//   {
//     $lookup: {
//       from: "orders",
//       localField: "orderId",
//       foreignField: "orderId",
//       as: "orderDetails",
//     },
//   },
//   {
//     $unwind: "$orderDetails",
//   },
//   {
//     $lookup: {
//       from: "users",
//       let: {
//         userId: { $toInt: "$orderDetails.userId" },
//       },
//       pipeline: [
//         {
//           $match: {
//             $expr: {
//               $eq: ["$$userId", "$userId"],
//             },
//           },
//         },
//       ],
//       as: "userDetails",
//     },
//   },
//   {
//     $project: {
//       transactionId: 1,
//       orderId: 1,
//       amount: 1,
//       status: 1,
//       paymentMethod: 1,
//       transactionDate: 1,
//       "orderDetails.orderId": 1,
//       "orderDetails.products": 1,
//       "orderDetails.total": 1,
//       "orderDetails.status": 1,
//       "userDetails.userId": 1,
//       "userDetails.name": 1,
//       "userDetails.email": 1,
//       "userDetails.address": 1,
//     },
//   },
// ]);
