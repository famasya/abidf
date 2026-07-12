# AGENTS.md

## Project Overview

Personal website and writings for Abid Famasya (abidf.com) — a healthtech CTO, researcher, and indie builder. The site includes a home page, about page, an automagic projects page, and markdown-powered writings. Deployed to Cloudflare via custom domain.

## Tech Stack

- **Framework**: TanStack Start (SSR) + TanStack Router (file-based routing, with-router-with-query integration)
- **UI**: React 19, TailwindCSS v4
- **Build tool**: Vite 8 + @vitejs/plugin-react
- **Content**: @content-collections (local markdown files with frontmatter)
- **Markdown rendering**: react-markdown + remark-frontmatter
- **Data fetching**: TanStack Query
- **Validation**: Zod v4
- **Deployment**: Cloudflare (via `@cloudflare/vite-plugin` + `wrangler`)
- **Package manager**: Bun
- **Linter**: oxlint
- **Formatter**: oxfmt
- **Testing**: vitest + @testing-library/react + jsdom
- **Language**: TypeScript 7 (strict mode, `target: ES2022`)

## Project Structure

```
├── content-collections.ts     # Writings content collection definition (schema, transform)
├── vite.config.ts             # Vite config (Cloudflare, Tailwind, TanStack Start, content collections)
├── wrangler.jsonc             # Cloudflare deployment config (custom domains, server entry point)
├── tsconfig.json              # TypeScript config (strict, path alias @/* -> ./src/*)
├── .oxlintrc.json             # oxlint rules (typescript, unicorn, oxc plugins)
├── .oxfmtrc.json              # oxfmt config
├── public/
│   ├── avatar.png
│   └── robots.txt             # Robots config, sitemap reference
├── src/
│   ├── router.tsx             # Router + QueryClient setup (with-router-with-query, viewport preloading, scroll restoration)
│   ├── routeTree.gen.ts       # Auto-generated route tree (DO NOT EDIT)
│   ├── styles.css             # Global styles (Tailwind, fonts, prose styling)
│   ├── writings/              # Markdown writings (*.md with frontmatter)
│   │   └── <slug>.md
│   ├── components/
│   │   ├── header.tsx         # Site header with nav links (home, about, automagic, writings)
│   │   └── footer.tsx         # Site footer with dynamic year
│   ├── utils/
│   │   └── writings.ts        # Writings helpers: getSortedPosts(), getPostBySlug()
│   └── routes/
│       ├── __root.tsx         # Root route (HTML shell, global head metadata, JSON-LD, Header + Footer layout)
│       ├── index.tsx          # Home page (/)
│       ├── about.tsx          # About page (/about)
│       ├── automagic.tsx      # Automagic Systems page (/automagic)
│       ├── writings.tsx              # Writings layout wrapper (/writings)
│       ├── writings.index.tsx        # Writings listing page (/writings)
│       ├── writings.$slug.tsx        # Individual writing (/writings/$slug)
│       ├── llms[.]txt.ts      # LLM-friendly text endpoint (/llms.txt)
│       └── api/
│           └── posts.ts       # JSON API for writings (/api/posts)
```

## Routes

| Path              | File                            | Description                             |
| ----------------- | ------------------------------- | --------------------------------------- |
| `/`               | `src/routes/index.tsx`          | Home page                               |
| `/about`          | `src/routes/about.tsx`          | About page                              |
| `/automagic`      | `src/routes/automagic.tsx`      | Automagic Systems projects              |
| `/writings`       | `src/routes/writings.tsx`       | Writings layout (renders `<Outlet />`)  |
| `/writings/`      | `src/routes/writings.index.tsx` | Writing listing                         |
| `/writings/$slug` | `src/routes/writings.$slug.tsx` | Individual writing (markdown rendered)  |
| `/llms.txt`       | `src/routes/llms[.]txt.ts`      | Plain-text LLM summary of the site      |
| `/api/posts`      | `src/routes/api/posts.ts`       | JSON API (Schema.org ItemList of posts) |

## Writings Content

Writing posts are markdown files in `src/writings/`. Each post has frontmatter:

```yaml
---
title: Post Title
created_at: YYYY-MM-DD
description: Optional short description
---
Markdown body...
```

The content collection is defined in `content-collections.ts` and compiled at build time via `@content-collections/vite`. Posts are accessed through `src/utils/writings.ts` which imports `allPosts` from the generated content collections and exports `getSortedPosts()` (sorted by `created_at` descending) and `getPostBySlug(slug)`.

## Key Configuration

- **Path alias**: `@/*` maps to `./src/*` (defined in `tsconfig.json` via `vite-tsconfig-paths`)
- **Prerendering**: Enabled with `crawlLinks: true` in `vite.config.ts`
- **Sitemap**: Auto-generated via TanStack Start, host: `https://abidf.com`
- **Fonts**: IBM Plex Sans (body), Source Code Pro (code) — loaded via `@fontsource-variable`
- **Cloudflare**: `nodejs_compat` flag enabled, compatibility date `2025-09-02`, main entry `@tanstack/react-start/server-entry`
- **Router integration**: Uses `@tanstack/react-router-with-query` (`routerWithQueryClient`) to share QueryClient between router and routes

## Commands

```bash
bun dev          # Start dev server on port 3000
bun run build    # Production build
bun run start    # Start production server (node .output/server/index.mjs)
bun run serve    # Preview production build (vite preview)
bun run lint     # Lint with oxlint
bun run lint:fix # Lint and auto-fix
bun run format   # Format with oxfmt
bun test         # Run tests with vitest
bun run deploy   # Deploy to Cloudflare via wrangler
```

## Conventions

- **File-based routing**: Routes are defined in `src/routes/` using `createFileRoute`. The route tree is auto-generated in `src/routeTree.gen.ts` — never edit this file manually.
- **Root route**: Uses `createRootRouteWithContext<{ queryClient: QueryClient }>()` to provide QueryClient context to all routes. Wraps children in an HTML shell with `<Header />`, a `<main>` area, and `<Footer />`.
- **Head metadata**: Each route defines SEO metadata (title, description, OG tags, Twitter cards, canonical URLs) via the `head` property. Writing posts also include JSON-LD structured data (`Article` schema), and the root route includes `WebSite` schema.
- **Styling**: TailwindCSS v4 via `@tailwindcss/vite`. Global styles in `src/styles.css`. Uses `@apply` for component-like styling. Prose styling for markdown content via `.prose` class.
- **Server endpoints**: API routes use the `server.handlers` pattern (GET, POST, etc.) within `createFileRoute`.
- **TypeScript**: Strict mode with `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `noUncheckedSideEffectImports`. Target `ES2022`.
- **Linting**: oxlint with `typescript`, `unicorn`, and `oxc` plugins. All rules set to `warn`.
- **Formatting**: oxfmt (config in `.oxfmtrc.json`).

## Notes

- The `dist/`, `.wrangler/`, and `.tanstack/` directories are build artifacts (gitignored).
- `.content-collections/` is a generated cache directory (gitignored).
- The site uses SSR with TanStack Start, deployed to Cloudflare Workers.
- `src/routeTree.gen.ts` is auto-generated by `@tanstack/router-plugin` — do not edit.
