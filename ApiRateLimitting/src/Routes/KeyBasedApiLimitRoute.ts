import { Router, Request, Response } from "express";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
  res.status(200).json({ message: "login successful" });
});

export default router;
