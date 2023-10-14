import { Request, Response } from "express";
import { pool } from "../../config/connectDB";

export const fetchReactionsForBlog = async (req: Request, res: Response) => {
  try {
    const {
      params: { blogId },
    } = req;

    if (blogId.trim() === "" || typeof blogId !== "string")
      throw new Error("Blog ID is not valid");

    const reactions = await pool.query(
      `select r.reaction_type, count(r.reaction_type),r.reaction_id
    from blogs b
    inner join reactions_mapping rm on rm.blog_id = b.blog_id 
    inner join reactions r  on r.reaction_id  = rm.reaction_id 
    WHERE b.blog_id = $1
    group by  r.reaction_type, r.reaction_id`,
      [blogId]
    );

    return res.send({ status: "success", reactions: reactions.rows });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
