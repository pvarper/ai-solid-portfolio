import * as dataaccess from "../src/index.js";

describe("dataaccess package entry point", () => {
  it("exports the Project, ContactSubmission and HealthStatus schemas", () => {
    expect(dataaccess.ProjectSchema).toBeDefined();
    expect(dataaccess.ContactSubmissionSchema).toBeDefined();
    expect(dataaccess.HealthStatusSchema).toBeDefined();
  });

  it("exports getProjects", () => {
    expect(typeof dataaccess.getProjects).toBe("function");
  });
});
