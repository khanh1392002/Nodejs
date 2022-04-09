import { Router } from "express";
import { list, signin, signup } from "../Controler/auth";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();

router.post("/signup", checkAuth, signup);
router.post("/signin",  checkAuth, signin);
router.get("/user", checkAuth, list);

export default router;