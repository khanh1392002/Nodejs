import { Router } from "express";
import { signin, signup } from "../Controler/auth";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();

router.post("/signup", checkAuth, signup);
router.post("/signin",  checkAuth, signin);

export default router;