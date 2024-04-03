import { Request, Response, NextFunction } from "express";
import { TODOdata } from "./todos.model";
const todoValidator = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const idPresent: boolean =
    TODOdata.filter((item) => item.id === id).length < 1;

  if (!/^\d+$/.test(id) || idPresent) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  next();
};
export default todoValidator;
