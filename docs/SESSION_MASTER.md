# Session Master Reference

> **Purpose:** Single source of truth for session continuity. Reference this file first to understand the project state, then consult other docs for detailed content.

---

## Project Overview

**Goal:** Create an interactive, game-like GitHub profile that tells John Leskas's story through the Hero's Journey narrative, connecting to the broader RSH Arcane System.

**Key Principle:** The terminal is one portal of many. Artifacts collected here unlock secrets elsewhere.

---

## What Was Built

### 1. Interactive Terminal (`/terminal/`)
A Next.js application serving as the Terminal Gateway to the RSH Arcane System.

**Stack:** Next.js 16, TypeScript, Tailwind CSS, JetBrains Mono font

**Key Files:**
- `src/lib/content.ts` — All narrative content, sigils, stages, oracle responses
- `src/hooks/useTerminal.ts` — Terminal logic, command processing, journey mode
- `src/components/Terminal.tsx` — UI component with status indicators
- `src/app/layout.tsx` — SEO metadata, Open Graph tags

### 2. GitHub README
Static markdown profile linking to the interactive terminal at `leskas.dev`.

---

## Terminal Features

### Commands
| Type | Commands |
|------|----------|
| **Core** | `help`, `whoami`, `journey`, `skills`, `philosophy`, `connect`, `wisdom` |
| **Arcane System** | `archives`, `ember`, `sigils`, `codex`, `signal`, `oracle` |
| **Easter Eggs** | `sudo`, `matrix`, `ignite`/`spark`/`radiate`, `creator`, `cave`/`inmost`, `portal`/`map`, `awaken`, `ritual`, `resonance` |

### Interactive Journey
- 9 stages based on real career timeline (2002-2025+)
- Each stage has: prompt, hint, answer, revelation, sigil
- Correct answers unlock sigils and artifact tokens
- Journey is a **spiral** (repeatable, depth-rewarding)

### Collectibles
**Sigils:** 🜂 ⚒ ⌘ ◈ ♔ ☀ ◎ ⊛ ⚿
**Artifacts:** Tokens from journey + easter eggs (e.g., `CREATOR-KEY-JL-2025`, `CAVE-SIGIL-∞`)

---

## Design Decisions

1. **Spiral, not circle** — Journey can be repeated; each pass brings new depth
2. **Cross-portal artifacts** — Tokens collected here intended for use in future RSH portals
3. **Mystery over explanation** — Hidden commands reward exploration
4. **Personal story as myth** — Career timeline mapped to Hero's Journey stages
5. **RSH as collective** — Terminal emphasizes John as Architect; RSH brand stands separate

---

## Timeline Mapping

| Year | Stage | Sigil |
|------|-------|-------|
| 2002-2006 | The Ordinary World | 🜂 Ember |
| 2006 | Call to Adventure | ⚒ Forge |
| 2007-2010 | Crossing Threshold | ⌘ Threshold |
| 2010-2018 | Tests & Allies | ⚒ Forge II |
| 2018-2019 | The Ordeal (RSH Founded) | ◈ Mirror |
| 2019-2022 | Transformation | ⚒ Forge III |
| 2022-2024 | The Return | ♔ Crown |
| 2025 | Ignition (CAO at Wynter) | ☀ Radiant |
| 2025+ | Spiral Continues | ◎ Spiral |

---

## Key Identity Points

**John Leskas — The Architect**
- Chief AI Officer at Wynter (Jan 2026)
- Founder & Head of Development at RSH
- 20+ years software engineering
- MSc AI in progress (University of Essex)

**Dual-Thread Execution:**
- RSH: "CRAFT. CREATIVITY. CLARITY."
- Wynter: "EMPOWER. TRANSFORM. RADIATE."

---

## RSH Arcane System (Future Portals)

The terminal references these portals (to be built on rsh.studio):
- **The Archives** — Transmissions, Chronicles, Ember Logs
- **The Codex** — Outer (public) and Inner (locked) doctrine
- **The Signal** — Encrypted newsletter
- **The Oracle** — AI-powered mythic guidance
- **The Inmost Cave** — Deepest transformation space

---

## Doc Index

| File | Purpose |
|------|---------|
| `PROFILE_CONTEXT.md` | Full executive profile, positions, education |
| `RSH_BRAND_CONTENT.md` | RSH website copy, services, testimonials |
| `HEROS_JOURNEY_NARRATIVE.md` | Original 12-stage narrative structure |
| `CREATIVE_ROLES.md` | Mythic storytelling framework roles |
| `TERMINAL_GUIDE.md` | User guide for terminal commands |

---

## Deployment

**Local:** `npm run dev` in `/terminal/` → http://localhost:3001
**Production:** Deploy to Vercel, configure `leskas.dev` domain

---

## Next Steps (When Continuing)

1. Deploy terminal to Vercel
2. Configure leskas.dev domain
3. Build other RSH portals (rsh.studio)
4. Add persistence (localStorage for sigils/artifacts)
5. Consider LLM-powered Oracle responses

---

*Last updated: Session where interactive journey, sigils, artifacts, and cross-portal system were implemented.*
