import express from "express"
import { createProj, deleteProj, getAllProj, getProjById, updateProj } from "../controllers/projController.js"

const router = express.Router();

router.post("/proj", createProj);
router.get("/proj", getAllProj);
router.get("/proj/:id", getProjById);
router.put("/proj/:id", updateProj);
router.delete("/proj/:id", deleteProj);

export default router;