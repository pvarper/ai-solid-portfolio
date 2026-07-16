import { z } from "zod";

export const HealthStatusSchema = z.object({
  status: z.enum(["ok", "degraded", "down"]),
  timestamp: z.iso.datetime(),
  details: z.string().optional(),
});

export type HealthStatus = z.infer<typeof HealthStatusSchema>;
