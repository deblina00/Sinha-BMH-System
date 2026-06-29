import express from "express";
import {
  createJob,
  getJobs,
  deleteJob,
  updateJob, // Import the update controller
} from "../controllers/job.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getJobs);
router.post("/", protect, createJob);
router.put("/:id", protect, updateJob);    // Added for editing jobs
router.delete("/:id", protect, deleteJob);

export default router;