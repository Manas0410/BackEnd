import { Request, Response } from "express";

const TimeoutTestControllerApi = (req: Request, res: Response) => {
  try {
    setTimeout(() => {
      res.status(200).json({ message: "this is successful response from api" });
    }, 200);
  } catch (err) {
    console.log(err, "sdsdfs");
  }
};

export default TimeoutTestControllerApi;
