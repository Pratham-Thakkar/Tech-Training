import { Router } from "express";
import * as projectController from "../controller/project";

const router: Router = Router();

router.post("/addProject", projectController.addProject);
router.get("/listProject/:offset&:limit", projectController.listProject);

export default router;
