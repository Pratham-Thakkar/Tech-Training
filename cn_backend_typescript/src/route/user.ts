import { Router } from "express";

import { addUser } from "../controller/user/register";
import { login } from "../controller/user/login";
import { updatePassword } from "../controller/user/updatePassword";
const router: Router = Router();

router.post("/signup", addUser);
router.post("/login", login);
router.post("/updatePassword", updatePassword);

export default router;
