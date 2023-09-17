import { Request, Response } from "express";
import { pool } from "../../config/connectDB";
import bcrypt from "bcrypt";

export const addUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    let {
      body: { firstName, lastName, email, password },
    } = req;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim() ||
      typeof firstName != "string" ||
      typeof lastName != "string" ||
      typeof password != "string"
    )
      throw Error("required fields are empty");

    const user = await pool.query(
      `SELECT 
            * FROM users 
        WHERE email = $1`,
      [email]
    );
    if (user.rows.length > 0) throw Error("User already existed");

    password = await bcrypt.hash(password, 10);
    await pool.query(
      `INSERT INTO users(first_name, last_name, email, user_password)
        VALUES ($1, $2, $3, $4)`,
      [firstName, lastName, email, password]
    );
    return res.send({ status: "success", message: "user added" });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
