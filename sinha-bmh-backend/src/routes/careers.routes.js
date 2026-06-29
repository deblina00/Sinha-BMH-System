import express from "express";
import upload from "../middleware/upload.js";
import {
  applyJob,
  getApplications,
} from "../controllers/application.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post(
  "/apply",
  upload.single("resume"),
  applyJob
);

router.get(
  "/applications",
  protect,
  getApplications
);

export default router;