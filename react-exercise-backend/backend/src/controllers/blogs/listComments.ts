import { Request, Response } from "express";
import { pool } from "../../config/connectDB";

export const listComments = async (req: Request, res: Response) => {
  try {
    const {
      params: { blogId },
    } = req;

    if (blogId.trim() === "" || typeof blogId !== "string")
      throw new Error("Blog Id is required");

    const comments = await pool.query(
      `select cb.comment_value, concat(u.first_name,' ',u.last_name) as commentor_name, cb.comment_id
    from comments_blogs cb 
    inner join users u on u.user_id = cb.user_id 
    where cb.blog_id = $1`,
      [blogId]
    );

    return res.send({ status: "success", comments: comments.rows });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
