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

export const listSpecificProject = async (req: Request, res: Response) => {
  try {
    const {
      params: { projectId },
    } = req;
    const specificProject = await pool.query(
      "SELECT * FROM projects WHERE project_id = $1",
      [projectId]
    );

    return res.send({
      status: "success",
      projectDetails: specificProject.rows,
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
