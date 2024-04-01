import jwt from "jsonwebtoken";
import { Request, Response } from "express";

interface Profile {
  id: string;
  email: string;
  password: string;
  name: string;
  city: string;
  state: string;
}

export const profile: Profile = {
  id: "004",
  email: "manas@gmail.com",
  password: "123456",
  name: "Manas",
  city: "Morena",
  state: "Madhya Pradesh",
};

export const signinUser = (req: Request, res: Response): void => {
  const { email, password } = req.body;

  if (email !== profile.email || password !== profile.password) {
    res
      .status(401)
      .send({ data: {}, meta: { message: "Your credentials are invalid" } });
  }

  const userToken = jwt.sign({ id: profile.id }, "manas0410");

  // Issue a Token
  res.status(200).send({
    data: {
      token: userToken,
    },
    meta: { message: "You're logged in" },
  });
};
