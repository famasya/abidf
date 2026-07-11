# AGENTS.md

## Project Overview

Personal website and blog for Abid Famasya (abidf.com) — a healthtech CTO, researcher, and indie builder. The site includes a home page, about page, and a markdown-powered blog. Deployed to Cloudflare via custom domain.

## Tech Stack

- **Framework**: TanStack Start (SSR) + TanStack Router (file-based routing)
- **UI**: React 19, TailwindCSS v4
- **Build tool**: Vite 8
- **Content**: @content-collections (local markdown files with frontmatter)
- **Markdown rendering**: react-markdown + remark-frontmatter
- **Data fetching**: TanStack Query
- **Validation**: Zod
- **Deployment**: Cloudflare (via `@cloudflare/vite-plugin` + `wrangler`)
- **Package manager**: Bun
- **Linter**: oxlint
- **Formatter**: oxfmt
- **Testing**: vitest
- **Language**: TypeScript (strict mode, `target: ES2022`)

## Project Structure

```
├── content-collections.ts     # Blog content collection definition (schema, transform)
├── vite.config.ts             # Vite config (Cloudflare, Tailwind, TanStack Start, content collections)
├── wrangler.jsonc             # Cloudflare deployment config (custom domains: abidf.com, www.abidf.com)
├── tsconfig.json              # TypeScript config (strict, path alias @/* -> ./src/*)
├── .oxlintrc.json             # oxlint rules (typescript, unicorn, oxc plugins)
├── .oxfmtrc.json              # oxfmt config
├── public/
│   ├── avatar.png
│   └── robots.txt             # Robots config, sitemap reference
├── src/
│   ├── router.tsx             # Router + QueryClient setup (viewport preloading, scroll restoration)
│   ├── routeTree.gen.ts       # Auto-generated route tree (DO NOT EDIT)
│   ├── styles.css             # Global styles (Tailwind, fonts, prose styling)
│   ├── blog/                  # Markdown blog posts (*.md with frontmatter)
│   │   ├── hello-world.md
│   │   └── static-prerendering.md
│   ├── components/
│   │   └── header.tsx         # Site header with nav links
│   ├── utils/
│   │   └── blog.ts            # Blog helpers: getSortedPosts(), getPostBySlug()
│   └── routes/
│       ├── __root.tsx         # Root route (HTML shell, global head metadata, JSON-LD)
│       ├── index.tsx          # Home page (/)
│       ├── about.tsx          # About page (/about)
│       ├── c.tsx              # Blog layout wrapper (/c)
│       ├── c.index.tsx        # Blog listing page (/c)
│       ├── c.$slug.tsx        # Individual blog post (/c/$slug)
│       ├── llms[.]txt.ts      # LLM-friendly text endpoint (/llms.txt)
│       └── api/
│           └── posts.ts       # JSON API for blog posts (/api/posts)
```

## Routes

| Path | File | Description |
|------|------|-------------|
| `/` | `src/routes/index.tsx` | Home page |
| `/about` | `src/routes/about.tsx` | About page |
| `/c` | `src/routes/c.tsx` | Blog layout (renders `<Outlet />`) |
| `/c/` | `src/routes/c.index.tsx` | Blog post listing |
| `/c/$slug` | `src/routes/c.$slug.tsx` | Individual blog post (markdown rendered) |
| `/llms.txt` | `src/routes/llms[.]txt.ts` | Plain-text LLM summary of the site |
| `/api/posts` | `src/routes/api/posts.ts` | JSON API (Schema.org ItemList of posts) |

## Blog Content

Blog posts are markdown files in `src/blog/`. Each post has frontmatter:

```yaml
---
title: Post Title
created_at: YYYY-MM-DD
description: Optional short description
---

Markdown body...
```

The content collection is defined in `content-collections.ts` and compiled at build time via `@content-collections/vite`. Posts are accessed through `src/utils/blog.ts` which exports `getSortedPosts()` (sorted by `created_at` descending) and `getPostBySlug(slug)`.

## Key Configuration

- **Path alias**: `@/*` maps to `./src/*` (defined in `tsconfig.json`)
- **Prerendering**: Enabled with `crawlLinks: true` in `vite.config.ts`
- **Sitemap**: Auto-generated, host: `https://abidf.com`
- **Fonts**: IBM Plex Sans (body), Source Code Pro (code) — loaded via `@fontsource-variable`
- **Cloudflare**: `nodejs_compat` flag enabled, compatibility date `2025-09-02`

## Commands

```bash
bun dev          # Start dev server on port 3000
bun run build    # Production build
bun run start    # Start production server
bun run lint     # Lint with oxlint
bun run lint:fix # Lint and auto-fix
bun run format   # Format with oxfmt
bun test         # Run tests with vitest
bun run deploy   # Deploy to Cloudflare via wrangler
```

## Conventions

- **File-based routing**: Routes are defined in `src/routes/` using `createFileRoute`. The route tree is auto-generated in `src/routeTree.gen.ts` — never edit this file manually.
- **Head metadata**: Each route defines SEO metadata (title, description, OG tags, Twitter cards, canonical URLs) via the `head` property. Blog posts also include JSON-LD structured data.
- **Styling**: TailwindCSS v4 via `@tailwindcss/vite`. Global styles in `src/styles.css`. Uses `@apply` for component-like styling. Prose styling for markdown content via `.prose` class.
- **Server endpoints**: API routes use the `server.handlers` pattern (GET, POST, etc.) within `createFileRoute`.
- **TypeScript**: Strict mode with `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `noUncheckedSideEffectImports`.
- **Linting**: oxlint with `typescript`, `unicorn`, and `oxc` plugins. All rules set to `warn`.
- **Formatting**: oxfmt (config in `.oxfmtrc.json`).

## Notes

- The `dist/` and `.wrangler/` directories are build artifacts (gitignored).
- `.content-collections/` is a generated cache directory (gitignored).
- The site uses SSR with TanStack Start, deployed to Cloudflare Workers.
- `src/routeTree.gen.ts` is auto-generated by `@tanstack/router-plugin` — do not edit.
