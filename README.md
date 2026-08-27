# Robert Collins — collinstrumpet.com

Portfolio site for trumpet player Robert Collins. Built with
[Astro](https://astro.build), content from [Contentful](https://contentful.com),
deployed to [Netlify](https://netlify.com).

Originally built with Next.js 13 in 2023 and migrated to Astro in 2026. Notes on
why are in [Migration](#migration-from-nextjs-13) below.

---

## Getting started

```bash
npm install
cp .env.example .env    # then fill in the values
npm run dev
```

Without Contentful credentials, build against placeholder content:

```bash
USE_MOCK_CONTENT=true npm run dev
```

## Scripts

| Command                | What it does                           |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Dev server on `localhost:4321`         |
| `npm run build`        | Production build to `dist/`            |
| `npm run preview`      | Serve the built site locally           |
| `npm run check`        | `astro check` — types and templates    |
| `npm run lint`         | ESLint, including `jsx-a11y` rules     |
| `npm run format`       | Prettier, write                        |
| `npm run format:check` | Prettier, verify only (future CI)      |

## Environment variables

See `.env.example` for the full list. In production these live in the Netlify
dashboard.

If Contentful credentials are missing and `USE_MOCK_CONTENT` is not set, the
build deliberately fails to prevent publishing a broken site.

## Deployment

Netlify builds from `main` via `netlify.toml`. Static pages go to the CDN,
`/api/mail` is bundled into a single SSR function (`path: "/*"` with
`preferStatic: true`, so static assets always win.

Content is fetched in `.astro` frontmatter, which runs at build time on the
server. Pages build as complete HTML. Should improve load times.

To re-publish after a CMS edit, trigger a Netlify build. A Contentful webhook
pointed at the Netlify build should do this automatically.

---

## Migration from Next.js 13

The 2023 build worked, but it used Next.js in a way that gave up most of what
Next.js is for.

Every page fetched its content in the browser, from an internal API route that
fetched from Contentful. The prerendered HTML contained no content at all. Most
importantly, search engines indexed empty pages.

Additionally, Astro ships smaller pagesL:
Measured, gzipped, before and after:

| Route         | Next.js JS | Astro JS |
| ------------- | ---------: | -------: |
| `/`           |     105 kB |   0.4 kB |
| `/bio`        |     109 kB |   0.4 kB |
| `/recordings` |    85.1 kB |   0.4 kB |
| `/teaching`   |     105 kB |   0.4 kB |
| `/contact`    |     109 kB |   1.6 kB |

CSS increased from 6.6 kB to 10.5 kB gzipped because daisyUI 5 emits more
than v2 did. Page weight is still down by roughly 90 kB per page.

### What else changed

- Secrets: Old keys rotated, services moved to Resend + Turnstile.
- Services: Replaces SendGrid with [Resend](https://resend.com/emails)
  SendGrid's free tier was discontinued May 2025
  Replaces recaptcha with [Turnstile](https://www.cloudflare.com/products/turnstile/)
