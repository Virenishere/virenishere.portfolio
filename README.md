# virenishere.portfolio

Personal portfolio of **Virender Prasad** — a terminal-inspired developer site with live Discord presence, 3D project cards, an animated skills grid, and a content layer driven entirely by typed JSON/TS constants.

**Live:** [https://virenishere.vercel.app/](https://virenishere.vercel.app/)

---

## Stack

- **Framework:** Next.js 15 (App Router) · React 19 · TypeScript 5
- **Styling:** Tailwind CSS v4 · `tw-animate-css` · custom scrollbar + smooth scroll
- **Motion:** `motion` (Framer Motion successor) · custom 3D card (`src/components/ui/3d-card`)
- **UI primitives:** Radix (`@radix-ui/react-progress`) · Lucide icons · Sonner toasts
- **Theming:** `next-themes`
- **Tooling:** ESLint (Next config) · Prettier · Husky
- **Deploy:** Vercel

---

## Features

- **Terminal-style project cards** — each entry supports live-link + optional multi-repo GitHub links (BE/FE) via the `githubLinks` array on the `Project` type.
- **Live Discord presence** — `DiscordPresence` component pulls from the Lanyard API (`NEXT_PUBLIC_DISCORD_USER_ID`), with graceful 5s timeout fallback.
- **3D card hover** — tilt/translate interaction on project and profile tiles.
- **Animated skills grid** — logos in `src/assets/logos/` rendered through a hover-aware `SkillCard`.
- **Responsive navbar** — separate `DesktopNavbar` and `MobileNavbar` components.
- **Data-driven content** — edit `src/data/*.json` and `src/constants/*.ts` to update projects, experience, skills, and footer without touching components.

---

## Project structure

```
src/
├── app/                    # App Router entry (layout, page, globals.css)
├── assets/logos/           # Inline SVG logo components per skill
├── components/             # Page sections + feature components
│   └── ui/                 # Reusable UI primitives (navbar, 3d-card, tip, etc.)
├── constants/              # Typed content constants (projects, skills, blogs, …)
├── data/                   # JSON content (projects, experience, site)
├── lib/                    # Utilities (cn, etc.)
└── types/                  # Shared TypeScript types
```

---

## Getting started

Requires **Node 20+** and **pnpm** (repo is locked with `pnpm-lock.yaml`).

```bash
pnpm install
pnpm dev              # http://localhost:3000
```

### Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start Next.js dev server |
| `pnpm build` | Production build         |
| `pnpm start` | Run the built app        |
| `pnpm lint`  | Run ESLint               |

### Environment

Create `.env.local`:

```
NEXT_PUBLIC_DISCORD_USER_ID=your_discord_snowflake_id
```

The Discord account must be in the [Lanyard](https://discord.gg/lanyard) server for presence data to flow.

---

## Editing content

- **Projects** → `src/data/projects.json` (typed via `Project` in `src/types/types.ts`). Supports single `githubLink` or multi-repo `githubLinks: [{ label, url }]`.
- **Skills** → `src/constants/skills.tsx`
- **Experience** → `src/data/experience.json` + `src/constants/experience.ts`
- **Site / footer** → `src/data/site.json` · `src/constants/footer.ts`
- **About / intro copy** → `src/constants/aboutme.ts`

No code changes needed for content updates — the components read from these sources at build/render time.

---

## Contact

- **Email:** virender288@gmail.com
- **GitHub:** [@Virenishere](https://github.com/Virenishere)
