import { Request, Response } from "express";
import { QueryResult } from "pg";

import { pool } from "../connectDb";

export const addProject = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      body: { projectName, projectDesc, createdBy, genre },
    } = req;

    const result: QueryResult = await pool.query(
      "INSERT INTO projects (project_name, project_desc, created_by, created_at, genre) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [projectName, projectDesc, createdBy, new Date(), genre]
    );

    return res.send({
      status: "success",
      message: "project added",
      projectDetails: result.rows[0],
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};

export const listProject = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      query: { limit, offset, searchText },
    } = req;

    const result: QueryResult = await pool.query(
      "SELECT * from PROJECTS WHERE project_name ILIKE $3 offset $1 limit $2",
      [offset, limit, `%${searchText}%`]
    );
    return res.send({
      status: "success",
      totalProjects: result.rowCount,
      projects: result.rows,
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};

export const deleteProject = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      params: { projectId },
    } = req;

    const result = await pool.query(
      "SELECT * FROM projects WHERE project_id = $1",
      [projectId]
    );

    if (!result.rows[0]) throw new Error("Project dose not exist");

    await pool.query(
      "DELETE FROM talent_submitted_projects WHERE project_id = $1",
      [projectId]
    );

    await pool.query("DELETE FROM projects WHERE project_id = $1", [projectId]);

    return res.send({ status: "success", message: "Project Deleted" });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};

export const updateProject = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      params: { projectId },
    } = req;
    let {
      body: { projectName, createdBy, projectDesc, genre },
    } = req;

    const result: QueryResult = await pool.query(
      "SELECT * FROM projects WHERE project_id = $1",
      [projectId]
    );
    if (!result.rows[0]) throw new Error("Project doesnot exists");

    projectName = !projectName ? result.rows[0].project_name : projectName;
    projectDesc = !projectDesc ? result.rows[0].project_desc : projectDesc;
    createdBy = !createdBy ? result.rows[0].created_by : createdBy;
    genre = !genre ? result.rows[0].genre : genre;

    const project: QueryResult = await pool.query(
      "UPDATE projects SET project_name = $1, project_desc = $2, created_by = $3, genre = $4 WHERE project_id = $5 RETURNING *",
      [projectName, projectDesc, createdBy, genre, projectId]
    );

    return res.send({
      status: "success",
      message: "project updated",
      projectDetails: project.rows[0],
    });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
