import { Worker } from "bullmq";
import { Redis } from "ioredis";
import { emitJobProgress, emitJobCompleted, emitJobError } from "../sockets/socket.js";

const redisUrl = process.env.REDIS_URL || "redis://127.0.0.1:6379";
const connection = new Redis(redisUrl, { maxRetriesPerRequest: null });

export function startWorker() {
    const worker = new Worker(
        "jobs",
        async (job) => {
            // Placeholder processor — DO NOT add scraping or platform-evading logic here.
            // Simulate progress events for demonstration.
            const jobId = String(job.id);

            try {
                // Simulate progress steps
                const steps = [10, 30, 60, 80, 95, 100];
                for (const p of steps) {
                    // Emitting progress to clients subscribed to jobId
                    emitJobProgress(jobId, { progress: p, status: `progress ${p}%` });
                    await new Promise((r) => setTimeout(r, 700)); // simulate work
                }

                // Finalize
                emitJobCompleted(jobId, { status: "completed" });

                return { success: true };
            } catch (err: any) {
                emitJobError(jobId, { error: err?.message || "Worker error" });
                throw err;
            }
        },
        { connection }
    );

    worker.on("failed", (job, err) => {
        const jobId = String(job?.id) ?? "unknown";
        emitJobError(jobId, { error: err?.message ?? "job failed" });
        console.error("Job failed", jobId, err);
    });

    worker.on("completed", (job) => {
        // Optionally log or do other housekeeping
        // console.log("Job completed", job.id);
    });

    return worker;
}