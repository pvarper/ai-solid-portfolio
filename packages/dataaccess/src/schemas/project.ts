import { z } from "zod";

const KEBAB_CASE_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const ProjectSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(KEBAB_CASE_PATTERN, "slug must be kebab-case"),
  title: z.string().min(1),
  description: z.string().min(1),
  stack: z.array(z.string().min(1)).min(1),
  repoUrl: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
  createdAt: z.iso.datetime(),
});

export type Project = z.infer<typeof ProjectSchema>;
