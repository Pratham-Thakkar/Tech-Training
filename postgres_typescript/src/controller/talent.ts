import { Request, Response } from "express";
import { pool } from "../connectDb";
import { QueryResult } from "pg";

export const addTalent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      body: { first_name, last_name, gender, email },
    } = req;

    const result: QueryResult = await pool.query(
      'INSERT INTO talent ("first_name", "last_name", "gender", "email") VALUES ($1, $2, $3, $4) RETURNING *',
      [first_name, last_name, gender, email]
    );
    return res.send({
      status: "sucess",
      message: "talent added",
      userDetails: result.rows,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};

export const deleteTalent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      params: { id },
    } = req;
    const talent = await pool.query(
      "SELECT *  FROM talent WHERE talent_id = $1",
      [id]
    );
    if (!talent.rows[0]) throw Error("Talent doesnot exist");
    await pool.query(
      "DELETE FROM talent_submitted_projects WHERE talent_id = $1",
      [id]
    );
    await pool.query("DELETE FROM talent WHERE talent_id = $1 RETURNING *", [
      id,
    ]);

    return res.send({
      status: "success",
      message: "user deleted",
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};

export const listTalent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const result: QueryResult = await pool.query("SELECT * FROM talent");

    return res.send({
      status: "success",
      count: result.rowCount,
      allUsers: result.rows,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};

export const updateTalent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      params: { id },
    } = req;
    let {
      body: { first_name, last_name, gender, email, is_active },
    } = req;

    const talent: QueryResult = await pool.query(
      "SELECT * FROM talent WHERE talent_id = $1",
      [id]
    );
    if (!talent.rows[0]) throw Error("talent does not exist");
    first_name = !first_name ? talent.rows[0].first_name : first_name;
    last_name = !last_name ? talent.rows[0].last_name : last_name;
    gender = !gender ? talent.rows[0].gender : gender;
    email = !email ? talent.rows[0].email : email;
    is_active = !is_active ? talent.rows[0].is_active : is_active;
    const result: QueryResult = await pool.query(
      "UPDATE talent SET first_name = $1, last_name = $2, gender = $3, email = $4, is_active = $5  WHERE talent_id = $6 RETURNING *",
      [first_name, last_name, gender, email, is_active, id]
    );

    return res.send({
      status: "success",
      message: "user updated",
      userDetails: result.rows,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
