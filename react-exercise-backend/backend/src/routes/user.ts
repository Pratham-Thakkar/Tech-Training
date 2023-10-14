import { Router } from "express";
import { addUser } from "../controllers/user/addUser";
import { login } from "../controllers/user/login";

const router: Router = Router();

router.post("/signup", addUser);
router.post("/signin", login);

export default router;
