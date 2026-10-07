import { z } from "zod";

export const botFormSchema = z.object({
    instagramId: z
        .string()
        .trim()
        .min(3, "Instagram ID must be at least 3 characters.")
        .max(120, "Instagram ID is too long.")
        .regex(
            /^[A-Za-z0-9._@]+$/,
            "Instagram ID can only contain letters, numbers, underscores, periods, and @."
        ),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters.")
        .max(128, "Password is too long.")
        .refine((value) => value.trim().length > 0, {
            message: "Password cannot be empty."
        }),

    targetUser: z
        .string()
        .trim()
        .min(2, "Target username must be at least 2 characters.")
        .max(60, "Target username is too long.")
        .regex(
            /^[A-Za-z0-9._]+$/,
            "Target username can only contain letters, numbers, underscores, and periods."
        ),

    followerCount: z
        .number()
        .int("Follower count must be a whole number.")
        .min(100, "Minimum is 100 followers.")
        .max(50000, "Maximum is 50,000 followers.")
})
    .refine((data) => data.followerCount % 100 === 0, {
        message: "Follower count must be in 100-step increments.",
        path: ["followerCount"]
    });

export type BotFormValues = z.infer<typeof botFormSchema>;