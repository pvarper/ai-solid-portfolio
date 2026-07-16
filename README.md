# AI Portfolio Landing

Public landing and portfolio website focused on showcasing AI projects, building credibility, and converting visitors into contact opportunities.

## Purpose

- Showcase selected AI projects with clear business and technical value.
- Present the owner as a credible builder for recruiters, clients, partners, and the general audience.
- Drive the primary CTA: contact the owner.

## Architecture Snapshot

- Monorepo structure.
- Frontend: `apps/frontend`
- Backend: `apps/backend`
- Shared contracts and data access primitives: `packages/dataaccess`
- Code architecture: modular + hexagonal + ports/adapters.
- Communication style: REST API.

## Stack

| Layer | Technology |
| --- | --- |
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS 4 |
| Backend | Node.js 26.x, TypeScript, NestJS 10, Fastify 4 |
| Shared | Zod |
| Testing | Vitest |
| Tooling | Docker, Docker Compose, pnpm |

## Workspace Layout

```text
ai-solid-portfolio/
  apps/
    frontend/
    backend/
  packages/
    dataaccess/
  docs/
    PRD.md
  AGENTS.md
  README.md
```

## MVP Scope

- Public pages: home, projects, about, contact, social links.
- Backend capabilities: projects, contact, health.
- Planned boundary for future authentication, without making auth part of MVP delivery.

## Development Principles

- `pnpm` only.
- Strict TypeScript is mandatory.
- Apply SOLID, DRY, and KISS deliberately.
- No login/authentication. This project does not have or reserve auth boundaries.
- TDD is mandatory.
- Tests live in separate `tests/` folders per module.
- Every meaningful module must support unit and integration coverage, minimum 95%.
- `apps/backend` and `packages/dataaccess` must not use mocks; `apps/frontend` may mock only backend endpoints not yet implemented.
- No issue is considered done based only on mocks.
- Shared contracts must live in `packages/dataaccess`. The frontend never accesses it directly (except importing Zod schemas for client-side validation) — all data flows through `apps/backend`.

## Script Placeholders

The exact commands will be finalized once the workspace is scaffolded.

- `pnpm install`
- `pnpm dev`
- `pnpm test`
- `pnpm test:coverage`
- `pnpm lint`
- `pnpm build`

## Next Steps

1. Scaffold the monorepo workspace and package boundaries.
2. Define shared Zod contracts in `packages/dataaccess`.
3. Implement the MVP information architecture and API surface.
4. Add TDD-first module templates for frontend and backend features.
5. Define contact anti-abuse, persistence, and notification flow.
