import { Request, Response } from "express";
import { pool } from "../connectDb";
import { QueryResult } from "pg";

export const addTalent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      body: { firstName, lastName, gender, email },
    } = req;

    const result: QueryResult = await pool.query(
      'INSERT INTO talents ("first_name", "last_name", "gender", "email", "created_at") VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [firstName, lastName, gender, email, new Date()]
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
      params: { talentId },
    } = req;
    const talent = await pool.query(
      "SELECT *  FROM talents WHERE talent_id = $1",
      [talentId]
    );
    if (!talent.rows[0]) throw Error("Talent doesnot exist");

    await pool.query(
      "DELETE FROM talents_submitted_projects WHERE talent_id = $1",
      [talentId]
    );
    await pool.query("DELETE FROM talents WHERE talent_id = $1 RETURNING *", [
      talentId,
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
    const result: QueryResult = await pool.query("SELECT * FROM talents");

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
      params: { talentId },
    } = req;
    let {
      body: { first_name, last_name, gender, email, is_active },
    } = req;

    const talent: QueryResult = await pool.query(
      "SELECT * FROM talents WHERE talent_id = $1",
      [talentId]
    );
    if (!talent.rows[0]) throw Error("talent does not exist");
    first_name = !first_name ? talent.rows[0].first_name : first_name;
    last_name = !last_name ? talent.rows[0].last_name : last_name;
    gender = !gender ? talent.rows[0].gender : gender;
    email = !email ? talent.rows[0].email : email;
    is_active = !is_active ? talent.rows[0].is_active : is_active;
    const result: QueryResult = await pool.query(
      "UPDATE talents SET first_name = $1, last_name = $2, gender = $3, email = $4, is_active = $5  WHERE talent_id = $6 RETURNING *",
      [first_name, last_name, gender, email, is_active, talentId]
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

export const listSpecificTalent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      params: { talentId },
    } = req;
    const result: QueryResult = await pool.query(
      "SELECT * FROM talents WHERE talent_id = $1",
      [talentId]
    );

    return res.send({
      status: "success",
      talentDetails: result.rows,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
