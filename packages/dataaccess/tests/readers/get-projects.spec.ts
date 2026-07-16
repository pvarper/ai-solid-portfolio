import { ProjectSchema } from "../../src/schemas/project.js";
import { getProjects } from "../../src/readers/get-projects.js";

describe("getProjects", () => {
  it("reads the real projects.json fixture and returns validated projects", async () => {
    const projects = await getProjects();

    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThanOrEqual(3);

    for (const project of projects) {
      expect(ProjectSchema.safeParse(project).success).toBe(true);
    }
  });

  it("includes the known ai-solid-portfolio project entry", async () => {
    const projects = await getProjects();

    const portfolio = projects.find((project) => project.slug === "ai-solid-portfolio");
    expect(portfolio).toBeDefined();
    expect(portfolio?.title).toBe("AI Solid Portfolio");
  });

  it("returns data typed and shaped according to the Project schema", async () => {
    const projects = await getProjects();
    const [first] = projects;

    expect(first).toBeDefined();
    expect(typeof first?.id).toBe("string");
    expect(typeof first?.featured).toBe("boolean");
    expect(Array.isArray(first?.stack)).toBe(true);
  });
});
