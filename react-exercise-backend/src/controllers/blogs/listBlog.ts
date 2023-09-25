import { Request, Response } from "express";
import { pool } from "../../config/connectDB";

export const listBlog = async (req: Request, res: Response) => {
  try {
    const allBlogs = await pool.query(
      `SELECT b.blog_id, b.blog_title, b.tags, substring(b.blog_content,1,90), c.category_type , concat(u.first_name, ' ', u.last_name) as "createdBy"
      FROM blogs b INNER JOIN users u ON u.user_id = b.user_id inner join categories c on c.category_id = b.category_id
      WHERE b.is_published = $1`,
      [true]
    );
    return res.send({ status: "success", message: allBlogs.rows });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
