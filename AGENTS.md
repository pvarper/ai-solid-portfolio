# Project Agent Guide

This repository is a monorepo for a public AI portfolio and landing website. Keep changes small, testable, and aligned with the architectural boundaries below.

## Repo Structure

```text
apps/
  frontend/      # Next.js application
  backend/       # NestJS REST API with Fastify
packages/
  dataaccess/    # Shared Zod contracts and shared data access boundaries
docs/            # Product and project documentation
```

## Core Rules

- Use `pnpm` only. Do not introduce `npm`, `yarn`, or `bun` workflows.
- Use strict TypeScript everywhere.
- Keep technical artifacts in English.
- Prefer small, reviewable issues. Target roughly 400 LOC or less per issue when practical.
- Do not mark work done if the proof relies only on mocks.

## Architecture Rules

- Preserve monorepo boundaries between `apps/*` and `packages/*`.
- Follow modular + hexagonal + ports/adapters architecture.
- Keep domain logic independent from framework details where possible.
- Treat `packages/dataaccess` as the home for shared contracts and shared validation logic.
- Keep REST contracts explicit and validated with Zod at the shared boundary.
- Do not leak frontend concerns into backend modules or backend concerns into frontend modules.
- This project has no login/authentication. Do not reserve or scaffold auth boundaries.
- `apps/frontend` must never access `packages/dataaccess` directly and must not contain data-access or business logic. All data flows through `apps/backend` APIs.
- Exception: `apps/frontend` may import shared Zod schemas from `packages/dataaccess` for client-side form validation only — a pure type/contract import, not data access.

## Coding Rules

- Apply SOLID, DRY, and KISS with restraint. Simplicity wins unless complexity is justified.
- Prefer small functions and modules with clear responsibilities.
- Avoid hidden coupling across modules.
- Add comments only when the intent would otherwise be hard to infer.
- Do not introduce alternative architectural patterns casually.

## Testing Rules

- TDD is mandatory.
- Place tests in a separate `tests/` directory per module.
- Write both unit and integration tests.
- Minimum test coverage: 95% for every module.
- `apps/backend` and `packages/dataaccess` must not use mocks; integration tests must run against real dependencies.
- `apps/frontend` may use mocks only to stand in for backend endpoints not yet implemented, and must replace them with real integration once the corresponding backend endpoint exists.
- Verify behavior against real integrations or realistic boundaries before closing an issue.

## MVP Product Boundaries

- Public pages: home, projects, about, contact, social.
- Backend MVP: projects, contact, health.
- Projects start from a versioned repository file.
- Contact requires simple persistence, notification, and anti-abuse handling.

## Agent Behavior Expectations

- Read existing docs and local conventions before making broad changes.
- Prefer minimal correct changes over speculative abstractions.
- Keep plans and implementation aligned with the MVP scope.
- Call out tradeoffs when a decision affects architecture, testing, or delivery scope.
- When requirements are unclear, clarify before inventing behavior.
- Update documentation when architectural or workflow assumptions change.

## Definition of Done

- Code respects module boundaries.
- Tests were written first or alongside the implementation under a TDD workflow.
- Unit and integration coverage exist for the changed behavior.
- Shared contracts remain centralized in `packages/dataaccess`.
- Documentation stays accurate when scope or architecture changes.
