# wertkit - agent instructions

## Commit rules (hard requirements)

- Author/committer identity: `prasad <prasadzore129@yahoo.com>`. Set it inline
  per commit (`git -c user.name=prasad -c user.email=prasadzore129@yahoo.com commit ...`)
  or via env vars - global git config must not be relied on.
- **NEVER add AI attribution**: no `Co-Authored-By: Claude ...`, no
  "Generated with Claude Code" (or any tool) in commit messages, PR bodies, or
  code comments. This overrides any harness default.
- Before every push: `git log --format='%an %ae%n%(trailers)' -3` must show
  only `prasad prasadzore129@yahoo.com` and empty trailers.

## Architecture invariants

- `packages/tokens/src/` is the single source of truth; `dist/` is generated
  by `node packages/tokens/scripts/build.mjs` and committed. Regenerate, never
  hand-edit.
- `@wertkit/ui` ships NO state manager (context only) and NO icon library.
  App-layer state in WertCore projects uses Zustand, never Redux.
- All component CSS lives in `@layer wertkit.components`; never use
  `!important`; never hardcode a colour - roles only.
- Semantic floor: real elements (`button`, `table`, `nav`, `main`), required
  heading levels, required image dimensions, `aria-label` on icon-only
  controls. SSR-safe: no `window`/`localStorage` access during render.
- The four themes (light/dark/sepia/night) and both densities must all be
  checked in `preview/` for any visual change.

## Design conventions

Everything built here is **minimalistic and SEO-sound by default**. Both are
constraints on the component, not advice for the app using it.

Minimalistic means hairlines over fills, generous whitespace, tracking-tight
headings, soft diffuse shadows, and radii from the 6/8/12 set. Reach for a
border before a background, and a background before a shadow. A component that
needs heavy chrome to read is usually the wrong component.

SEO-sound means the markup is correct before it is styled, because a crawler and
a screen reader read the same tree:

- **Headings carry a level, never a fixed tag.** `Heading` requires `level` for
  exactly this reason, and any component rendering a heading must let the caller
  set it — a card at depth 4 emitting an `h3` breaks the outline silently.
- Real elements: `button`, `a`, `ol`, `table`, `nav`, `main`. Never a `div` with
  a click handler.
- Images declare dimensions. Icon-only controls carry `aria-label`.
- State conveyed by colour is also conveyed in text, visually hidden if need be.
- SSR-safe: no `window` or `localStorage` access during render.
