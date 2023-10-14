import e, { Request, Response } from "express";
import { pool } from "../../config/connectDB";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const allCategories = await pool.query(`SELECT 
                                                * FROM 
                                              categories`);
    return res.send({ status: "success", allCategories: allCategories.rows });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
