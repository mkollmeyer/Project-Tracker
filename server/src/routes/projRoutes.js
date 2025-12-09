import express from "express"
import { createProj, deleteProj, getAllProj, getProjById, updateProj } from "../controllers/projController.js"

const projRouter= express.Router();

projRouter.post("/proj", createProj);
projRouter.get("/proj", getAllProj);
projRouter.get("/proj/:id", getProjById);
projRouter.put("/proj/:id", updateProj);
projRouter.delete("/proj/:id", deleteProj);

export default projRouter;