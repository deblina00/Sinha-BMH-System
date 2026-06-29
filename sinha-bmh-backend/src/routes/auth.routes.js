// src/routes/admin.routes.js
import express from "express";
import { protect } from "../middleware/auth.js"; // Adjust path as necessary
import { login, getMe } from "../controllers/auth.controller.js";


const router = express.Router();

router.post("/login", login);
router.get("/me", protect, getMe); // <--- Add this line

export default router;