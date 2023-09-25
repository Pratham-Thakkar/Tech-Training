import { Request, Response } from "express";

import { pool } from "../../config/connectDB";

export const addComments = async (req: Request, res: Response) => {
  try {
    const {
      body: { userId, blogId, comment },
    } = req;

    if (comment.trim() === "" || typeof comment !== "string")
      throw new Error("Comment value cant be empty");

    await pool.query(
      `insert into comments_blogs (blog_id, user_id, comment_value)
        values($1, $2, $3)`,
      [blogId, userId, comment]
    );

    return res.send({
      status: "success",
      message: "comment added successfully",
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
