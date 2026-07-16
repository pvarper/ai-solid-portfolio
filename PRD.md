# Product Requirements Document

## Product Summary

`AI Portfolio Landing` is a public-facing website that presents the owner's AI projects, communicates credibility, and converts visitor interest into direct contact.

## Quick View

| Area | Decision |
| --- | --- |
| Product type | Public landing and portfolio website |
| Primary audience | Recruiters, clients, potential partners, general audience |
| Primary CTA | Contact the owner |
| Secondary CTAs | View projects, schedule a meeting, follow social profiles |
| Frontend | Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 |
| Backend | Node.js 26.x + TypeScript + NestJS 10 + Fastify 4 |
| API style | REST |
| Architecture | Monorepo, modular, hexagonal, ports/adapters |

## Problem

The owner needs a focused public presence that does more than list projects. The site must quickly show capability, create trust, and make it easy for interested people to start a conversation.

## Product Goals

1. Present AI projects in a way that is easy to scan and credible to technical and non-technical visitors.
2. Increase inbound opportunities through a clear contact path.
3. Establish a clean foundation for future expansion without overbuilding the MVP.

## Non-Goals

- Full CMS in MVP.
- Public authentication flows in MVP.
- Complex project management backoffice in MVP.
- Multi-language content in MVP unless explicitly prioritized later.

## Target Audiences

### Recruiters

Need fast proof of capability, project variety, technical stack confidence, and an easy way to reach out.

### Clients

Need confidence that the owner can solve real business problems using AI, not just build demos.

### Potential Partners

Need a clear sense of technical fit, professionalism, and collaboration potential.

### General Audience

Need a simple and visually coherent explanation of what the owner builds.

## User Outcomes

- Understand what kind of AI projects the owner builds.
- Review selected projects with enough context to judge value.
- Find a low-friction way to contact the owner.
- Discover social profiles and optional meeting scheduling.

## MVP Scope

### Public Pages

- Home
- Projects
- About
- Contact
- Social presence entry points

### Backend APIs

- `GET /projects`
- `GET /projects/:id` or equivalent project detail endpoint if required by the frontend design
- `POST /contact`
- `GET /health`

### Planned Future Boundaries

- Authentication boundary reserved for future protected administration or content workflows.

## Functional Requirements

### Home

- Present a strong hero section with clear positioning.
- Show the primary CTA prominently.
- Support secondary CTAs for projects, meeting scheduling, and social follow.
- Highlight selected projects or proof points.

### Projects

- List featured AI projects.
- Each project should expose enough structured information to explain problem, approach, and outcome.
- Initial project source will be a versioned file under the repository.

### About

- Explain the owner's profile, strengths, and working style.
- Support credibility with concise, relevant context.

### Contact

- Allow visitors to send a contact request.
- Persist submissions using a simple storage approach suitable for MVP.
- Trigger a notification flow.
- Include anti-abuse protection.

### Social

- Provide links to the owner's relevant public profiles.
- Make social links easy to find without competing with the main contact CTA.

## Data and Contracts

- Shared contracts must live in `packages/dataaccess`.
- Zod is the source of truth for shared validation and payload boundaries.
- Projects are initially read from a versioned repository file.
- Contact submission data must have explicit validation and anti-abuse checks.

## Quality Requirements

### Engineering Constraints

- Strict TypeScript only.
- `pnpm` is the only allowed package manager.
- Use SOLID, DRY, and KISS as implementation constraints, not slogans.
- Code architecture must remain modular and hexagonal.

### Testing Requirements

- TDD is mandatory.
- Tests must live in separate `tests/` folders per module.
- Unit and integration tests are both required.
- Coverage reporting is required.
- No issue is done based only on mocked behavior.

## Success Criteria

- Visitors can identify the owner's AI focus within seconds.
- Visitors can browse projects without confusion.
- Contact conversion path is obvious and low-friction.
- MVP backend supports stable project retrieval, contact handling, and health monitoring.
- The repo structure supports future growth without breaking module boundaries.

## Risks and Open Questions

- The exact contact persistence mechanism is intentionally simple for MVP and should be selected during implementation.
- Notification channel is not yet fixed and should be chosen based on reliability and setup cost.
- Meeting scheduling may rely on an external provider rather than custom logic.

## Delivery Notes

- Prefer small reviewable issues, approximately 400 LOC or less when practical.
- Keep the MVP narrow and conversion-focused.
- Preserve future auth boundaries without implementing premature complexity.
