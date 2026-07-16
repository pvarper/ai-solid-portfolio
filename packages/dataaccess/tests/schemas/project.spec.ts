import { ProjectSchema } from "../../src/schemas/project.js";

describe("ProjectSchema", () => {
  const validProject = {
    id: "proj-1",
    slug: "portfolio-site",
    title: "Portfolio Site",
    description: "A personal portfolio built with Next.js and NestJS.",
    stack: ["TypeScript", "Next.js", "NestJS"],
    repoUrl: "https://github.com/pvarper/ai-solid-portfolio",
    demoUrl: "https://portfolio.example.com",
    featured: true,
    createdAt: "2026-01-15T00:00:00.000Z",
  };

  it("accepts a fully valid project", () => {
    const result = ProjectSchema.safeParse(validProject);
    expect(result.success).toBe(true);
  });

  it("accepts a project without optional repoUrl/demoUrl", () => {
    const { repoUrl, demoUrl, ...rest } = validProject;
    const result = ProjectSchema.safeParse(rest);
    expect(result.success).toBe(true);
  });

  it("defaults featured to false when omitted", () => {
    const { featured, ...rest } = validProject;
    const result = ProjectSchema.safeParse(rest);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.featured).toBe(false);
    }
  });

  it("rejects an empty id", () => {
    const result = ProjectSchema.safeParse({ ...validProject, id: "" });
    expect(result.success).toBe(false);
  });

  it("rejects a slug that is not kebab-case", () => {
    const result = ProjectSchema.safeParse({ ...validProject, slug: "Portfolio Site!" });
    expect(result.success).toBe(false);
  });

  it("rejects an empty title", () => {
    const result = ProjectSchema.safeParse({ ...validProject, title: "" });
    expect(result.success).toBe(false);
  });

  it("rejects an empty description", () => {
    const result = ProjectSchema.safeParse({ ...validProject, description: "" });
    expect(result.success).toBe(false);
  });

  it("rejects an empty stack array", () => {
    const result = ProjectSchema.safeParse({ ...validProject, stack: [] });
    expect(result.success).toBe(false);
  });

  it("rejects a stack containing an empty string", () => {
    const result = ProjectSchema.safeParse({ ...validProject, stack: [""] });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid repoUrl", () => {
    const result = ProjectSchema.safeParse({ ...validProject, repoUrl: "not-a-url" });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid demoUrl", () => {
    const result = ProjectSchema.safeParse({ ...validProject, demoUrl: "not-a-url" });
    expect(result.success).toBe(false);
  });

  it("rejects a non-boolean featured", () => {
    const result = ProjectSchema.safeParse({ ...validProject, featured: "yes" });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid createdAt date string", () => {
    const result = ProjectSchema.safeParse({ ...validProject, createdAt: "not-a-date" });
    expect(result.success).toBe(false);
  });

  it("rejects a missing required field", () => {
    const { title, ...rest } = validProject;
    const result = ProjectSchema.safeParse(rest);
    expect(result.success).toBe(false);
  });
});
