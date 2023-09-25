import { Router } from "express";
import { getCategories } from "../controllers/categories/getCategories";

const router: Router = Router();

router.get("/categories", getCategories);

export default router;
