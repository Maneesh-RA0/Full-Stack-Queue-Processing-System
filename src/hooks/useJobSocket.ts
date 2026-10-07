import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import type { JobProgressPayload } from "../types";
import { useUIStore } from "../stores/uiStore";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "";

export function useJobSocket(jobId?: string | null) {
    const socketRef = useRef<Socket | null>(null);
    const setProgress = useUIStore((s) => s.setProgress);
    const setCurrentJobId = useUIStore((s) => s.setCurrentJobId);

    useEffect(() => {
        if (!SOCKET_URL) {
            console.warn("VITE_SOCKET_URL not set; job socket disabled.");
            return;
        }

        if (!socketRef.current) {
            socketRef.current = io(SOCKET_URL, {
                withCredentials: true
            });

            socketRef.current.on("connect", () => {
                // console.log("socket connected", socketRef.current?.id);
            });

            socketRef.current.on("disconnect", () => {
                // console.log("socket disconnected");
            });

            socketRef.current.on("job:progress", (payload: JobProgressPayload) => {
                setProgress(payload.jobId, payload.progress);
            });

            socketRef.current.on("job:completed", (payload: JobProgressPayload) => {
                setProgress(payload.jobId, 100);
            });

            socketRef.current.on("job:error", (payload: JobProgressPayload & { error?: string }) => {
                // set progress to 0 on error (optional)
                setProgress(payload.jobId, 0);
                console.error("Job error", payload.error);
            });
        }

        const socket = socketRef.current;

        if (jobId && socket && socket.connected) {
            socket.emit("subscribe", { jobId });
            setCurrentJobId(jobId);
        } else if (jobId && socket) {
            // wait until connected then subscribe
            const handleConnect = () => socket.emit("subscribe", { jobId });
            socket.on("connect", handleConnect);
            return () => socket.off("connect", handleConnect);
        }

        return () => {
            // Unsubscribe from room on jobId change or unmount
            if (socket && jobId) socket.emit("unsubscribe", { jobId });
            // KEEP socket connection open across hook mounts for performance (optional)
        };
    }, [jobId, setProgress, setCurrentJobId]);

    return {
        socket: socketRef.current
    };
}