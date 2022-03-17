import { Router } from "express";
import { create, list, read, remove, update } from "../Controler/category";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();


router.post("/category", checkAuth, create);
router.get("/category", checkAuth, read);
router.get("/category", checkAuth, list);
router.delete("/category", checkAuth, remove);
router.put("/category", checkAuth, update);

export default router;