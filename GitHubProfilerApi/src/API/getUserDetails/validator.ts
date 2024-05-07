import { Request, Response, NextFunction } from "express";

const validator = (req: Request, res: Response, next: NextFunction) => {
  const { userName } = req.params;
  if (!userName) {
    return res.status(400).send("User ID is required");
  }
  next();
};

export default validator;
