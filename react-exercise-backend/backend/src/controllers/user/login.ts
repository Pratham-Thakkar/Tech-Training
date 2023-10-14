import { Request, Response } from "express";
import { pool } from "../../config/connectDB";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const {
      body: { email, password },
    } = req;

    if (
      !email.trim() ||
      !password.trim() ||
      typeof email !== "string" ||
      typeof password !== "string"
    )
      throw new Error("Email or password is empty");

    const user = await pool.query(
      `SELECT 
          * FROM users 
        WHERE email = $1`,
      [email]
    );
    if (user.rows.length === 0) throw new Error("user not existed");

    if (!(await bcrypt.compare(password, user.rows[0].user_password)))
      throw new Error("email or password is incorrect");

    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        payLoad: {
          name: `${user.rows[0].first_name} ${user.rows[0].last_name}`,
          userId: user.rows[0].user_id,
          email: user.rows[0].email,
        },
      },
      process.env.SECRET_KEY!
    );

    return res.send({ status: "success", message: "Login successful", token });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
