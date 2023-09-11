import { Router } from "express";

import {
  addTalent,
  listTalent,
  deleteTalent,
  updateTalent,
  listSpecificTalent,
} from "../controller/talent";
import { submitProject } from "../controller/submitProject";
import { listSubmittedProjects } from "../controller/listSubmittedProjects";
import { login } from "../controller/login";

const router: Router = Router();

router.post("/addTalent", addTalent);
router.get("/listTalent", listTalent);
router.get("/listSpecificTalent/:talentId", listSpecificTalent);
router.delete("/deleteTalent/:talentId", deleteTalent);
router.put("/updateTalent/:talentId", updateTalent);
router.get("/listSubmittedProject/:talentId", listSubmittedProjects);
router.post("/submitProject", submitProject);
router.post("/login", login);

export default router;
