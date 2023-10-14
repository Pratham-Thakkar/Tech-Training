import { Request, Response } from "express";
import { pool } from "../../config/connectDB";

export const getReactions = async (req: Request, res: Response) => {
  try {
    const reactions = await pool.query(`select * from reactions r `);

    return res.send({ status: "success", reactions: reactions.rows });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
