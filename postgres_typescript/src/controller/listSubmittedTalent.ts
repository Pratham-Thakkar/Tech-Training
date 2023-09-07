import { Request, Response } from "express";
import { pool } from "../connectDb";

export const listSubmittedTalent = async (req: Request, res: Response) => {
  try {
    const {
      params: { projectId },
    } = req;

    const project = await pool.query(
      "SELECT * FROM projects WHERE project_id = $1",
      [projectId]
    );

    if (!project.rows[0]) throw Error("Project does not exist");

    const submissionsDetails = await pool.query(
      "SELECT CONCAT_WS(' ', t.first_name, t.last_name) AS full_name, p.project_name, tsp.submitted_at FROM talent t INNER JOIN talent_submitted_projects tsp ON tsp.talent_id = t.talent_id INNER JOIN projects p ON tsp.project_id = p.project_id WHERE p.project_id = $1 ORDER BY 3 DESC",
      [projectId]
    );

    return res.send({
      status: "success",
      submissions: submissionsDetails.rows,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
