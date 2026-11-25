Build a complete, production-quality multi-page Next.js (App Router) website — a cinematic,
expressive **personal portfolio / digital creator**. The feeling: a contemporary film title
sequence crossed with an editorial journal. Bold, emotional, smooth.

## Routes (all must be fully implemented and linked from the nav)
`/`, `/about`, `/works`, `/journal`, `/contact`

## Engineering contract (follow exactly)
**Stack is already configured — NEVER emit config files** (no package.json / tsconfig / next.config / postcss).
- Next.js App Router + TypeScript, Tailwind CSS v4, shadcn/ui primitives.
- Icons: `lucide-react`.
- Animation: motion v12 — `import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";`
- Class helper: `import { cn } from "@/lib/utils";`

**Components you may import (ONLY these exist in the project):**
- `@/components/ui/button` → `{ Button }`
- `@/components/ui/card` → `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`
- `@/components/ui/badge` → `{ Badge }`
- `@/components/ui/input` → `{ Input }`
- `@/components/ui/label` → `{ Label }`
Everything else you MUST write yourself as a new file under `components/`. NEVER import from `@/components/magicui/*`, `@/components/reactbits/*`, `@/components/blocks/*`, or any path you did not create in this response.

**Hard rules — the build runs `tsc --noEmit` + `next build` and MUST pass:**
1. Any file using hooks, `motion`, or browser APIs starts with `"use client"` on line 1.
2. Icons are components: `<ArrowUpRight className="size-4" />`. NEVER write `{icon.size}`. NEVER wrap an icon in `<p>`.
3. Shared chrome (header/nav, footer, scroll-progress bar, menu overlay) is defined in `app/layout.tsx` and rendered EXACTLY ONCE. Pages must NOT render the header or footer themselves.
4. Import every symbol you use. No unused imports. No `any`. Type props explicitly.
5. Photography: plain `<img>` (NEVER `next/image`) with `loading="lazy"`, a real `alt`, and `className="… object-cover"`. Use `https://picsum.photos/seed/<unique-slug>/<w>/<h>`. Duotone via a CSS overlay/blend is welcome. No empty src.
6. Respect reduced motion: read `useReducedMotion()` and skip/shorten animations when true.
7. Realistic, specific, non-repetitive copy. No "Lorem ipsum", no "TODO", no "sample text".
8. Responsive mobile-first; never overflow horizontally.

## Design language
- Cinematic dark canvas with a subtle **film-grain / noise** overlay; expressive display typography (large, tight, occasionally italic); strong hierarchy; oversized section numerals; editorial captions.
- A single vibrant accent (e.g. coral or electric violet) against near-black; tasteful duotone imagery.

## Motion language (this site's signature — expressive but smooth; NO global custom cursor)
- A top **scroll-progress bar** (`scaleX` driven by `useScroll`).
- A **parallax layered hero** with a big name reveal.
- **Sticky storytelling** sections: a pinned panel whose content changes as you scroll.
- A **works list with hover image reveal**: a floating thumbnail that follows the cursor over the list rows (this is a hover preview, not a global cursor).
- An **animated full-screen navigation menu** overlay with staggered links.
- A **draggable horizontal gallery** on the works page.
- **Hover image transformations** (scale / clip) on cards.

Write these components: `components/scroll-progress.tsx`, `components/menu-overlay.tsx`, `components/hover-preview-list.tsx`, `components/draggable-gallery.tsx`, `components/reveal.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`.

## Content
Fictional creator **"MAYA OKAFOR"** — motion designer & creative developer.
- `/` — cinematic hero (name + role), a sticky-storytelling intro, featured works, a marquee of clients, a closing CTA.
- `/works` — 6 projects (title, client, year, role, outcome) shown in the hover-preview list + a draggable gallery.
- `/journal` — 4 short editorial posts (title, date, dek, reading time) laid out editorially.
- `/about` — bio, a timeline (years → milestones), tools/stack, recognition.
- `/contact` — a warm statement, email + socials, a short message form.

## Output
Start with a short `thinking` plan (a few lines). Then emit ONLY `<file path="…">…</file>` blocks — no markdown fences, no prose. Emit `app/layout.tsx`, every route above, and every component you reference.
