import { Request, Response, NextFunction } from "express";
import { userType } from "../interface/user";

export const cdAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.userType !== userType.cd)
      throw Error("Only cd are allowed to do this");
    next();
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).send({ status: "failed", message: err.message });
    }
    return res.status(500).send({ status: "failed", message: err });
  }
};
