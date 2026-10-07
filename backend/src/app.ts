import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import jobsRouter from "./routes/jobs.js";

export function createApp() {
    const app = express();

    app.use(helmet());
    app.use(
        cors({
            origin: process.env.CORS_ORIGIN || "http://localhost:5173",
            credentials: true
        })
    );

    // Basic rate limiting for the API (tune for your production needs)
    const apiLimiter = rateLimit({
        windowMs: 60 * 1000, // 1 minute
        max: 20,
        standardHeaders: true,
        legacyHeaders: false
    });

    app.use(express.json({ limit: "10kb" })); // small size limit for safety
    app.use("/api/", apiLimiter);

    app.use("/api/jobs", jobsRouter);

    // health
    app.get("/health", (_req, res) => res.json({ ok: true }));

    return app;
}