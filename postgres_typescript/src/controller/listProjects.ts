import { Request, Response } from "express";
import { pool } from "../connectDb";

export const listAllProjects = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const allProjectDetails = await pool.query(
      "SELECT p.project_name, COUNT(tsp.project_id) FROM projects p LEFT JOIN talent_submitted_projects tsp ON p.project_id = tsp.project_id GROUP BY p.project_name ORDER BY 2 DESC"
    );
    return res.send({
      status: "success",
      totalProjects: allProjectDetails.rowCount,
      projects: allProjectDetails.rows,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};

export const listSubmissionsForGenre = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const submissionsForGenreDetails = await pool.query(
      "SELECT p.genre, COUNT(tsp.project_id) FROM projects p INNER JOIN talent_submitted_projects tsp ON p.project_id = tsp.project_id GROUP BY p.genre ORDER BY 2 DESC"
    );
    return res.send({
      status: "success",
      submissionForGenre: submissionsForGenreDetails.rows,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
