import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token: string | undefined = req.get("Authorization");
    if (!token) throw Error("You need to sign in again");
    token = token.split(" ")[1];

    let payLoad: string | jwt.JwtPayload = jwt.verify(
      token,
      process.env.SECRET_KEY!
    );
    if (typeof payLoad !== "string") {
      req.userType = payLoad.data.userType;
      req.userId = payLoad.data.userId;
    } else throw payLoad;
    next();
    return null;
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).send({ status: "failed", message: err.message });
    }
    return res.status(500).send({ status: "failed", message: err });
  }
};
