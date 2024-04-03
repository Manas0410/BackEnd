import { Request, Response, NextFunction } from "express";

const ApiTimeOutMiddleWare = (time: number | undefined) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const timer = setTimeout(() => {
      if (!res.headersSent) {
        res.status(503).send("API timeout");
      }
    }, time);

    res.on("finish", () => {
      clearTimeout(timer);
    });

    next();
  };
};
export default ApiTimeOutMiddleWare;
