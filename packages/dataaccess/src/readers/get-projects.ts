import { readFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";
import { ProjectSchema, type Project } from "../schemas/project.js";

const PROJECTS_DATA_PATH = path.join(import.meta.dirname, "..", "data", "projects.json");

/**
 * Reads the versioned `projects.json` repository file and returns its
 * contents validated against the `Project` schema.
 *
 * Throws if the file cannot be read or if its contents do not match the
 * expected shape.
 */
export async function getProjects(): Promise<Project[]> {
  const raw = await readFile(PROJECTS_DATA_PATH, "utf-8");
  const parsed: unknown = JSON.parse(raw);
  const result = z.array(ProjectSchema).safeParse(parsed);

  if (!result.success) {
    throw new Error(`Invalid projects data in ${PROJECTS_DATA_PATH}: ${result.error.message}`);
  }

  return result.data;
}
