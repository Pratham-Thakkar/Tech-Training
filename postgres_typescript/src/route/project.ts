import { Router } from "express";

import {
  addProject,
  deleteProject,
  listProject,
  updateProject,
} from "../controller/project";
import { listSubmittedTalent } from "../controller/listSubmittedTalent";
import {
  listAllProjects,
  listSubmissionsForGenre,
} from "../controller/listProjects";

const router: Router = Router();

router.post("/addProject", addProject);
router.get("/listProject", listProject);
router.delete("/deleteProject/:projectId", deleteProject);
router.put("/updateProject/:projectId", updateProject);
router.get("/listSubmittedTalent/:projectId", listSubmittedTalent);
router.get("/listAllProject", listAllProjects);
router.get("/listSubmissionsForGenre", listSubmissionsForGenre);

export default router;
