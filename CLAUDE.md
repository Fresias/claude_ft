# Project: Next.js Islands Architecture

## Tech Stack
- Framework: Next.js 15 (App Router).
- Animations: GSAP with @gsap/react.
- Patterns: RSC-First + Islands Architecture.

## Architecture Rules
- **RSC First**: All files in `app/` and `components/server/` must be Server Components. No JS sent to client.
- **Island Pattern**: Use the `'use client'` directive ONLY for interactive/animated components in `components/islands/`.
- **GSAP Implementation**: Use the `useGSAP()` hook for all animations to ensure proper cleanup and prevent memory leaks.
- **No Global Selectors**: Always use a `scope` (ref) with `useGSAP` to avoid targeting elements outside the island.

## Tooling & MCP
- **GSAP MCP**: Always use the GSAP MCP server to verify plugin syntax (ScrollTrigger, Flip, etc.) before writing code.
- **Why**: We need precise syntax because hydration mismatches in Next.js can break animations.

## Development Scripts
- `npm run dev` - Start development server.
- `npm run build` - Production build.
