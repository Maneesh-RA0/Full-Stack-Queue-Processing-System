import { Router } from "express";
import { createJob } from "../controllers/jobsController.js";

const router = Router();

router.post("/", createJob);

export default router;