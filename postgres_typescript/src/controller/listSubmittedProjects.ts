import { Request, Response } from "express";
import { pool } from "../connectDb";

export const listSubmittedProjects = async (req: Request, res: Response) => {
  try {
    const {
      params: { talentId },
    } = req;

    const talent = await pool.query(
      "SELECT * FROM talent WHERE talent_id = $1",
      [talentId]
    );
    if (!talent.rows[0]) throw Error("talent doesnot exists");

    const submittedProjectsDetails = await pool.query(
      "SELECT p.project_name,tsp.submitted_at FROM talent t INNER JOIN talent_submitted_projects tsp ON tsp.talent_id = t.talent_id INNER JOIN projects p ON p.project_id = tsp.project_id WHERE t.talent_id = $1 ORDER BY 2 DESC",
      [talentId]
    );

    return res.send({
      status: "success",
      totalSubmittedProjects: submittedProjectsDetails.rowCount,
      submittedProjects: submittedProjectsDetails.rows,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
