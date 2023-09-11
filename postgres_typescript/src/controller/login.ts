import { sign } from "jsonwebtoken";
import { Response, Request } from "express";

export const login = (req: Request, res: Response) => {
  try {
    const {
      body: { email, password },
    } = req;

    const token = sign({ email, password }, "1234");
    if (email && password) {
      return res.json(token);
    }
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
  }
};
