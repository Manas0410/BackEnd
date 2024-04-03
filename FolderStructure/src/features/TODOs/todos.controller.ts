import { Request, Response } from "express";
import { TODOdata } from "./todos.model";

const todoController = (req: Request, res: Response) => {
  const { id } = req.params;

  const data = TODOdata.find((item) => item.id === id);
  res.status(200).json(data);
};

export default todoController;
