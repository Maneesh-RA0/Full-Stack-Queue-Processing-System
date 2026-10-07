import type { BotFormValues, JobResponse } from "../types";

const API_BASE = import.meta.env.VITE_API_BASE || "";

export async function submitBotConfig(payload: BotFormValues): Promise<JobResponse> {
    // Do not log sensitive fields like payload.password
    const resp = await fetch(`${API_BASE}/api/jobs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include", // if your server uses cookies; optional
        body: JSON.stringify({
            instagramId: payload.instagramId,
            password: payload.password, // sent to server over TLS; server must handle securely
            targetUser: payload.targetUser,
            followerCount: payload.followerCount
        })
    });

    if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`Server error: ${text}`);
    }

    return (await resp.json()) as JobResponse;
}