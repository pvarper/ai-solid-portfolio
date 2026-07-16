import { ContactSubmissionSchema } from "../../src/schemas/contact-submission.js";

describe("ContactSubmissionSchema", () => {
  const validSubmission = {
    name: "Ada Lovelace",
    email: "ada@example.com",
    message: "Hello, I would like to discuss a potential collaboration.",
    submittedAt: "2026-01-15T00:00:00.000Z",
  };

  it("accepts a fully valid submission", () => {
    const result = ContactSubmissionSchema.safeParse(validSubmission);
    expect(result.success).toBe(true);
  });

  it("rejects an empty name", () => {
    const result = ContactSubmissionSchema.safeParse({ ...validSubmission, name: "" });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const result = ContactSubmissionSchema.safeParse({ ...validSubmission, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects a message shorter than the minimum length", () => {
    const result = ContactSubmissionSchema.safeParse({ ...validSubmission, message: "short" });
    expect(result.success).toBe(false);
  });

  it("rejects an empty message", () => {
    const result = ContactSubmissionSchema.safeParse({ ...validSubmission, message: "" });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid submittedAt date string", () => {
    const result = ContactSubmissionSchema.safeParse({ ...validSubmission, submittedAt: "not-a-date" });
    expect(result.success).toBe(false);
  });

  it("rejects a missing required field", () => {
    const { email, ...rest } = validSubmission;
    const result = ContactSubmissionSchema.safeParse(rest);
    expect(result.success).toBe(false);
  });
});
