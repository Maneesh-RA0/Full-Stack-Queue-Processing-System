export type BotFormValues = {
    instagramId: string;
    password: string;
    targetUser: string;
    followerCount: number;
};

export type JobResponse = {
    jobId: string;
    message?: string;
};

export type JobProgressPayload = {
    jobId: string;
    progress: number; // 0-100
    status?: string;
};