import { Router } from "express";

import {
  addTalent,
  listTalent,
  deleteTalent,
  updateTalent,
} from "../controller/talent";
import { submitProject } from "../controller/submitProject";
import { listSubmittedProjects } from "../controller/listSubmittedProjects";

const router: Router = Router();

router.post("/addTalent", addTalent);
router.get("/listTalent", listTalent);
router.delete("/deleteTalent/:talentId", deleteTalent);
router.put("/updateTalent/:talentId", updateTalent);
router.get("/listSubmittedProject/:talentId", listSubmittedProjects);
router.post("/submitProject", submitProject);

export default router;
