import express, { Request, Response, Router } from "express";
import { NoteData, NoteDataModel } from "./Schema/schema";

const NoteRouter: Router = express.Router();

NoteRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { title, description }: NoteData = req.body;

    const note = new NoteDataModel({ title, description });

    const result = await note.save();

    res.status(201).send(result);
  } catch (err: any) {
    console.error("Err: ", err);

    res.status(500).send({
      data: {},
      meta: { message: "Unable to take your request. Please try later" },
    });
  }
});

NoteRouter.get("/", async (req: Request, res: Response) => {
  try {
    const data = await NoteDataModel.find({ isActive: true });
    res.status(201).send(data);
  } catch (err: any) {
    console.error("Err: ", err);

    res.status(500).send({
      data: {},
      meta: { message: "Unable to take your request. Please try later" },
    });
  }
});

export default NoteRouter;
