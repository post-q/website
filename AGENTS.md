# Agent Development Guide

## Build & Test Commands

- `npm run dev` - Start dev server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run check` - Run all checks (Astro + ESLint + Prettier)
- `npm run check:astro` - Type-check Astro files only
- `npm run check:eslint` - Lint with ESLint only
- `npm run check:prettier` - Check formatting only
- `npm run fix` - Auto-fix ESLint and Prettier issues
- No test suite configured in this project

## Code Style

- **Formatting**: Prettier with 120 char width, 2 spaces, single quotes, semicolons, ES5 trailing commas
- **Imports**: Use `~/*` alias for `src/*` paths (e.g., `import { trim } from '~/utils/utils'`). Import Astro content with `astro:content`. Import config with `astrowind:config`
- **TypeScript**: Strict null checks enabled. Use explicit types for function params and returns. Prefix unused vars with `_`
- **Naming**: camelCase for functions/vars, PascalCase for types/components, UPPER_SNAKE_CASE for constants
- **Astro Components**: Define Props interface, destructure with defaults, use class:list for conditional classes
- **Error Handling**: No explicit patterns - validate inputs with guards (e.g., `if (!Array.isArray(ids)) return []`)
- **Comments**: Use `/** */` for exported functions, minimal inline comments

## Project Context

- Astro 5.0 + Tailwind CSS static site with blog functionality
- Content in `src/content/post/` (MDX/Markdown), pages in `src/pages/`
- Config in `src/config.yaml` controls site metadata, blog settings, analytics
