import { z } from "zod";

export const UserValidator = z.object({
    name: z.string().min(16).max(32),
});
