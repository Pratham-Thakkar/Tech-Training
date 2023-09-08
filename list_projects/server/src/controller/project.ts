import { Request, Response } from "express";
import { v4 } from "uuid";
import * as path from "path";
import Project from "../model/project";
import { HydratedDocument } from "mongoose";
import { IProject } from "../interface/project";

export const addProject = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const {
      body: { createdBy, projectName, projectType, union },
    } = req;

    if (!createdBy || !projectName || !projectType || !union)
      throw Error("Required Fields are empty");

    const projectExist: HydratedDocument<IProject> | null =
      await Project.findOne({ projectName });
    if (projectExist?.createdBy === createdBy)
      throw Error("Project name cannot be same");

    const project: HydratedDocument<IProject> = new Project({
      projectId: v4(),
      projectName: projectName as string,
      createdBy: createdBy as string,
      projectType: projectType as string,
      union: union as string,
    });
    await project.save();
    return res.send({ status: 200, message: "project added" });
  } catch (err) {
    if (err instanceof Error)
      return res.status(900).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};

export const listProject = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      params: { offset, limit },
    } = req;
    console.log(offset, limit);

    const allProjects: HydratedDocument<IProject>[] | null =
      await Project.find().skip(parseInt(offset)).limit(parseInt(limit));
    if (!allProjects) throw Error("No Project Exist");
    return res.json(allProjects);
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
