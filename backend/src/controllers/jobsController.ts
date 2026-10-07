import type { Request, Response } from "express";
import { jobSchema, type JobPayload } from "../schemas/jobSchema.js";
import { addJobToQueue } from "../services/queue.js";

export async function createJob(req: Request, res: Response) {
    try {
        // Parse and validate
        // Note: body may contain password, ensure server stores/handles it securely (not in logs)
        const parsed = jobSchema.parse({
            instagramId: req.body.instagramId,
            password: req.body.password,
            targetUser: req.body.targetUser,
            followerCount: Number(req.body.followerCount)
        }) as JobPayload;

        // Enqueue job for background processing (worker will process)
        const jobId = await addJobToQueue({
            instagramId: parsed.instagramId,
            // IMPORTANT: consider tokenizing or encrypting password on server side.
            password: parsed.password,
            targetUser: parsed.targetUser,
            followerCount: parsed.followerCount
        });

        // Return job id to client for progress monitoring
        res.status(201).json({ jobId, message: "Job queued" });
    } catch (err: any) {
        console.error("createJob error:", err?.message || err);
        if (err?.issues) {
            // Zod validation error
            return res.status(400).json({ error: "Validation failed", details: err.issues });
        }
        return res.status(500).json({ error: "Server error" });
    }
}