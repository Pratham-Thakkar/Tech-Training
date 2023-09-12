import { Request, Response } from "express";

export const isAuth = (req: Request, res: Response, next: Function) => {
  try {
    let token = req.get("Authorization");
    token = token?.split(" ")[1];
    if (!token) throw Error("Unauthorized");
    next();
  } catch (err) {
    if (err instanceof Error) {
      return res.send({ status: "failed", message: err.message });
    }
    return res.send({ status: "failed", message: err });
  }
};
