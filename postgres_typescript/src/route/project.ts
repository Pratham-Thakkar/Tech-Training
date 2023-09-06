import { Router } from "express";

import {
  addProject,
  deleteProject,
  listProject,
  updateProject,
} from "../controller/project";

import { submitProject } from "../controller/submitProject";

const router: Router = Router();

router.post("/addProject", addProject);
router.get("/listProject", listProject);
router.delete("/deleteProject/:projectId", deleteProject);
router.put("/updateProject/:projectId", updateProject);
router.post("/submitProject", submitProject);

export default router;
