import { z } from "zod";

export const createWorkflowSchema = z.object({
  name: z.string().max(50).min(2, {
    message: "Workflow name must be at least 2 characters long."
  }),
  description: z.string().max(50).optional(true),
});
