import { z } from "zod";

export const jobSchema = z.object({
    instagramId: z
        .string()
        .trim()
        .min(3)
        .max(120)
        .regex(/^[A-Za-z0-9._@]+$/, "Invalid characters in instagramId"),
    password: z
        .string()
        .min(6)
        .max(128),
    targetUser: z
        .string()
        .trim()
        .min(2)
        .max(60)
        .regex(/^[A-Za-z0-9._]+$/, "Invalid characters in targetUser"),
    followerCount: z
        .number()
        .int()
        .min(100)
        .max(50000)
        .refine((n) => n % 100 === 0, "followerCount must be in 100-step increments")
});

export type JobPayload = z.infer<typeof jobSchema>;