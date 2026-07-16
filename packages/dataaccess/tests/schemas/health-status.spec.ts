import { HealthStatusSchema } from "../../src/schemas/health-status.js";

describe("HealthStatusSchema", () => {
  const validStatus = {
    status: "ok" as const,
    timestamp: "2026-01-15T00:00:00.000Z",
  };

  it("accepts a valid status without details", () => {
    const result = HealthStatusSchema.safeParse(validStatus);
    expect(result.success).toBe(true);
  });

  it("accepts a valid status with details", () => {
    const result = HealthStatusSchema.safeParse({ ...validStatus, details: "all systems operational" });
    expect(result.success).toBe(true);
  });

  it("accepts the degraded status", () => {
    const result = HealthStatusSchema.safeParse({ ...validStatus, status: "degraded" });
    expect(result.success).toBe(true);
  });

  it("accepts the down status", () => {
    const result = HealthStatusSchema.safeParse({ ...validStatus, status: "down" });
    expect(result.success).toBe(true);
  });

  it("rejects an unknown status value", () => {
    const result = HealthStatusSchema.safeParse({ ...validStatus, status: "unknown" });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid timestamp", () => {
    const result = HealthStatusSchema.safeParse({ ...validStatus, timestamp: "not-a-date" });
    expect(result.success).toBe(false);
  });

  it("rejects a missing status", () => {
    const { status, ...rest } = validStatus;
    const result = HealthStatusSchema.safeParse(rest);
    expect(result.success).toBe(false);
  });
});
