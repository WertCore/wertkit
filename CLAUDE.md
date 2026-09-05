# wertkit - agent instructions

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
