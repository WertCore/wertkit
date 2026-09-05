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

## Design conventions

Everything built here is **minimalistic and SEO-sound by default** — constraints
on the component, not advice for the app using it. An app can re-skin identity
tokens; it cannot fix markup we got wrong.

**Read [spec/design-conventions.md](spec/design-conventions.md) before adding a
component.** In short:

- Border before background, background before shadow. Hairlines, generous
  whitespace, radii from the 6/8/12 set, soft shadows, roles never hex.
- Headings carry a level, never a fixed tag — `Heading` requires `level` for
  exactly this reason, and a card at depth 4 emitting an `h3` breaks the outline
  silently.
- Real elements: `button`, `a`, `ol`, `table`, `nav`, `main`. Never a `div` with
  a click handler.
- Images declare dimensions; icon-only controls carry `aria-label`; state shown
  in colour is also shown in text.
- SSR-safe: no `window` or `localStorage` during render.
