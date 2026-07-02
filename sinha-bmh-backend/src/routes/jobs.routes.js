import express from "express";
import {
  createJob,
  getJobs,
  getJobById, // 1. Import the new controller
  deleteJob,
  updateJob, 
} from "../controllers/job.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getJobs);
router.get("/:id", getJobById);       // 2. Add this route for single job fetching
router.post("/", protect, createJob);
router.put("/:id", protect, updateJob);    
router.delete("/:id", protect, deleteJob);

export default router;