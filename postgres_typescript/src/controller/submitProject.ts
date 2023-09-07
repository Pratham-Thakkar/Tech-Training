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

    const talentExist = await pool.query(
      "SELECT * FROM talent WHERE talent_id = $1 ",
      [talentId]
    );

    const projectExist = await pool.query(
      "SELECT * FROM projects WHERE project_id = $1",
      [projectId]
    );

    if (!talentExist.rows[0] || !projectExist.rows[0])
      throw Error("Talent or Project dosenot exist");

    const project: QueryResult = await pool.query(
      "SELECT * FROM talent_submitted_projects WHERE talent_id = $1",
      [talentId]
    );

    const alreadySubmitted = project.rows.some((submittedProject) => {
      return submittedProject.project_id === projectId;
    });

    if (alreadySubmitted) throw Error("Already Submitted");

    await pool.query(
      "INSERT INTO talent_submitted_projects (talent_id, project_id, submitted_at) VALUES ($1, $2, $3)",
      [talentId, projectId, new Date()]
    );
    return res.send({ status: "success", message: "project submitted" });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
