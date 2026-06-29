// src/routes/admin.routes.js

import express from "express";
import { getDashboardStats } from "../controllers/admin.controller.js";
import { protect } from "../middleware/auth.js"; 

const router = express.Router();


router.get("/dashboard", protect, getDashboardStats);

export default router;