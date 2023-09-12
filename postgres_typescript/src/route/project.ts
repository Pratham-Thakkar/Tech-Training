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
  listSpecificProject,
  listSubmissionsForGenre,
} from "../controller/listProjects";
import { isAuth } from "../middleware/isAuth";

const router: Router = Router();

router.post("/addProject", isAuth, addProject);
router.get("/listProject", listProject);
router.get("/listSpecificProject/:projectId", listSpecificProject);
router.delete("/deleteProject/:projectId", deleteProject);
router.put("/updateProject/:projectId", updateProject);
router.get("/listSubmittedTalent/:projectId", listSubmittedTalent);
router.get("/listAllProject", listAllProjects);
router.get("/listSubmissionsForGenre", listSubmissionsForGenre);

export default router;
