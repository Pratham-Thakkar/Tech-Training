import { Router } from "express";
import { addLocation } from "../controller/admin/addLocation";
import { verifyCd } from "../controller/admin/verifyCd";
import { isAuth } from "../middleware/isAuth";
import { adminAuth } from "../middleware/adminAuth";

const router: Router = Router();

router.post("/addLocation", addLocation);
router.post("/verifyCd/:userId", isAuth, adminAuth, verifyCd);

export default router;
