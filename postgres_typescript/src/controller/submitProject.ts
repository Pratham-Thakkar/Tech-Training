import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../connectDb";

export const submitProject = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      body: { talentId, projectId },
    } = req;

    const talent = await pool.query(
      "SELECT * FROM talent WHERE talent_id = $1 ",
      [talentId]
    );

    const project = await pool.query(
      "SELECT * FROM projects WHERE project_id = $1",
      [projectId]
    );

    if (!talent.rows[0] || !project.rows[0])
      throw Error("Talent or Project dosenot exist");

    await pool.query(
      "INSERT INTO talent_submitted_projects (talent_id, project_id) VALUES ($1, $2)",
      [talentId, projectId]
    );
    return res.send({ status: "success", message: "project submitted" });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
