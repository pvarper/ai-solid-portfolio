export type ProofPoint = {
  id: string;
  title: string;
  detail: string;
};

export const HERO = {
  name: "Pablo Vargas",
  role: "AI-Native Software Engineer",
  valueProp: "Building solid, AI-augmented software end to end.",
  subhead:
    "I design and ship production systems where clean architecture and AI-assisted engineering work together.",
} as const;

export const PROOF_POINTS: readonly ProofPoint[] = [
  {
    id: "clean-architecture",
    title: "Clean & Hexagonal Architecture",
    detail:
      "Systems designed with clear boundaries between domain, application, and infrastructure.",
  },
  {
    id: "ai-native-workflow",
    title: "AI-Native Delivery",
    detail:
      "Spec-driven development with AI agents, from design to verified implementation.",
  },
  {
    id: "test-driven",
    title: "Test-Driven Rigor",
    detail: "Strict TDD with enforced coverage thresholds across every project.",
  },
  {
    id: "full-stack-typescript",
    title: "Full-Stack TypeScript",
    detail:
      "End-to-end type safety from data access contracts to the presentation layer.",
  },
] as const;

export const CTA = {
  href: "/contact",
  label: "Contact me",
} as const;
