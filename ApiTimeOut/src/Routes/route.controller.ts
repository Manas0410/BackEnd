import { Request, Response } from "express";

const TimeoutTestControllerApi = (req: Request, res: Response) => {
  setTimeout(() => {
    res.status(200).json({ message: "this is successful response from api" });
  }, 200);
};

export default TimeoutTestControllerApi;
