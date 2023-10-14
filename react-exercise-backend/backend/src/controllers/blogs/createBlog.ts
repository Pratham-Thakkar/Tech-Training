import { Request, Response } from "express";
import { pool } from "../../config/connectDB";

export const createBlog = async (req: Request, res: Response) => {
  try {
    const {
      body: { title, content, categoryId, createdBy, isPublish, tags },
    } = req;

    if (
      !title.trim() ||
      !content.trim() ||
      !categoryId.trim() ||
      !createdBy.trim() ||
      typeof title !== "string" ||
      typeof content !== "string" ||
      typeof categoryId !== "string" ||
      typeof createdBy !== "string" ||
      typeof isPublish !== "boolean"
    )
      throw new Error("Required fields are empty");

    const result = await pool.query(
      `INSERT INTO blogs (blog_title, blog_content, category_id, user_id, is_published,tags) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, content, categoryId, createdBy, isPublish, tags]
    );
    return res.send({ status: "sucess", result });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
