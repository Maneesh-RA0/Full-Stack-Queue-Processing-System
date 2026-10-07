import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";

let io: Server | null = null;

export function initSocket(server: HttpServer) {
    if (io) return io;
    io = new Server(server, {
        cors: {
            origin: process.env.CORS_ORIGIN || "http://localhost:5173",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket: Socket) => {
        // Subscribe/unsubscribe model for job rooms
        socket.on("subscribe", ({ jobId }: { jobId: string }) => {
            if (jobId) socket.join(jobId);
        });

        socket.on("unsubscribe", ({ jobId }: { jobId: string }) => {
            if (jobId) socket.leave(jobId);
        });
    });

    return io;
}

export function emitJobProgress(jobId: string, payload: { progress: number; status?: string }) {
    if (!io) return;
    io.to(jobId).emit("job:progress", { jobId, ...payload });
}

export function emitJobCompleted(jobId: string, payload?: { status?: string }) {
    if (!io) return;
    io.to(jobId).emit("job:completed", { jobId, progress: 100, ...payload });
}

export function emitJobError(jobId: string, payload?: { error?: string }) {
    if (!io) return;
    io.to(jobId).emit("job:error", { jobId, error: payload?.error || "Unknown error" });
}