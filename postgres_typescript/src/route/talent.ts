import { Router } from "express";

import {
  addTalent,
  listTalent,
  deleteTalent,
  updateTalent,
} from "../controller/talent";

const router: Router = Router();

router.post("/addTalent", addTalent);
router.get("/listTalent", listTalent);
router.delete("/deleteTalent/:id", deleteTalent);
router.put("/updateTalent/:id", updateTalent);

export default router;
