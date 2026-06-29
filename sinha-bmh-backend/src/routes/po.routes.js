import express from "express";
import upload from "../middleware/upload.js";
import {
  createPO,
  getPOs,
  deletePO,
} from "../controllers/po.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", protect, getPOs);

router.post(
  "/",
  protect,
  upload.single("file"),
  createPO
);

router.delete("/:id", protect, deletePO);

export default router;