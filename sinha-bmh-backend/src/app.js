//src/app.js

import express from "express";
import cors from "cors";
import helmet from "helmet";

import authRoutes from "./routes/auth.routes.js";
import jobsRoutes from "./routes/jobs.routes.js";
import careersRoutes from "./routes/careers.routes.js";
import poRoutes from "./routes/po.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import { limiter } from "./middleware/rateLimiter.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(helmet());

app.use(limiter);

app.use("/api/auth", authRoutes);

app.use("/api/jobs", jobsRoutes);

app.use("/api/careers", careersRoutes);

app.use("/api/po", poRoutes);

app.use("/api/admin", adminRoutes);

export default app;