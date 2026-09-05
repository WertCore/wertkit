# wertkit

WertCore's design system. A portable token core plus a web component layer -
minimalistic, modern, themed, and SEO-sound by default.

## Layout

| Path | What |
|---|---|
| `packages/tokens` | Source of truth. `primitives.json` + 4 themes → generates `tokens.css`, `tokens.ts`, `tokens.rs` |
| `packages/ui` | `@wertkit/ui` - React components. Radix behaviour, CSS Modules, zero styling runtime |
| `spec/` | The naming contract and the CLI output contract. Read these first |
| `preview/` | Kitchen-sink page - the visual regression surface |

## Quick start (app side)

```bash
pnpm add github:WertCore/wertkit#path:packages/ui   # or a workspace/git dep
```

```tsx
import '@wertkit/tokens/css';
import '@wertkit/ui/styles.css';
import { ThemeProvider, AppShell, Button } from '@wertkit/ui';

<ThemeProvider defaultTheme="system">
  <AppShell>...</AppShell>
</ThemeProvider>
```

SSR apps: render `<ThemeScript />` in `<head>` to kill the theme flash.

## Themes & density

`light` / `dark` / `sepia` / `night` built in; `system` follows the OS.
Density: `normal` / `compact` (touch devices auto-upsize controls via
`pointer: coarse`). Both are `data-*` attributes on `<html>` - no re-render.

An app re-skins itself by overriding `--wk-*` role variables; see
`spec/naming.md` for the identity/structure boundary and the override tiers.

## Development

```bash
pnpm install
pnpm tokens      # regenerate dist tokens from src
pnpm build       # tokens + ui
pnpm preview     # kitchen sink on :5173
```

Node ≥ 20, pnpm 11. The repo is private; packages are consumed as git deps -
nothing publishes to npm.
