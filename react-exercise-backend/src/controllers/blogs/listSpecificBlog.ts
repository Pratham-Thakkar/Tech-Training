import { Request, Response } from "express";
import { pool } from "../../config/connectDB";

export const listSpecificBlog = async (req: Request, res: Response) => {
  try {
    const {
      params: { blogId },
    } = req;
    if (blogId.trim() === "" || typeof blogId !== "string")
      throw new Error("Blog ID is not valid");

    const projectDetails = await pool.query(
      `SELECT b.blog_id, b.blog_title, b.tags,b.blog_content, c.category_type , concat(u.first_name, ' ', u.last_name) as "createdBy"
    FROM blogs b INNER JOIN users u ON u.user_id = b.user_id inner join categories c on c.category_id = b.category_id
    WHERE b.blog_id= $1`,
      [blogId]
    );

    return res.send({ status: "success", projectDetails: projectDetails.rows });
  } catch (err) {
    if (err instanceof Error)
      return res.send({ status: "failed", message: err.message });
    return res.send({ status: "failed", message: err });
  }
};
