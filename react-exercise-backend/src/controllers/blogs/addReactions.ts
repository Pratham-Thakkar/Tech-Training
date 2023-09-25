import { Request, Response } from "express";
import { pool } from "../../config/connectDB";

export const addReaction = async (req: Request, res: Response) => {
  try {
    const {
      body: { blogId, userId, reactionId },
    } = req;
    if (!blogId || !userId || !reactionId)
      throw new Error("Unable to add reaction");

    await pool.query(
      `insert into reactions_mapping(user_id, blog_id, reaction_id)
    values ($1, $2, $3)`,
      [userId, blogId, reactionId]
    );

    return res.send({ status: "success", message: "reaction added" });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
