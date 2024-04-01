import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export const getUserDetails = (req: Request, res: Response): void => {
  const { authorization } = req.headers as { authorization: string };

  // Validate Token
  let user: any = null; // Adjust type as per your user object structure
  try {
    user = jwt.verify(authorization, "manas0410");
  } catch (err) {
    user = { message: "Invalid Token" };
  }

  res.send({ message: authorization, user });
};
