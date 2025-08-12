import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import routes from "./routes";
import { errorHandler } from "./middlewares/error.middleware";
import { HttpError } from "./utils/httpError";
import { config } from "./config/env";

const app = express();

// Security and parsers
app.use(helmet());
app.use(
  cors({
    origin: config.cors.origins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(morgan("dev"));

// Basic rate limiting for all requests (can be customized per-route if needed)
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// Health and readiness
app.get("/health", (_req, res) => res.status(200).json({ status: "ok" }));
app.get("/ready", (_req, res) => res.status(200).json({ ready: true }));

app.use("/api", routes);

// 404 handler
app.use((req, _res, next) => {
  next(new HttpError(404, `Route not found: ${req.method} ${req.originalUrl}`));
});

// Error handler (must be last)
app.use(errorHandler);

export default app;
