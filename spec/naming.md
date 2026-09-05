# wertkit naming contract

This document is the actual product. Components are implementations of it; any
future runtime (React Native, egui, a TUI) implements *this*, not the React code.

## Tokens

Semantic roles only in app code. Raw palette values never leave
`packages/tokens/src/primitives.json`.

| Role | Meaning |
|---|---|
| `bg` / `bg-subtle` / `bg-raised` / `bg-inset` | page / quiet section / lifted surface / wells & fields |
| `fg` / `fg-muted` / `fg-subtle` | primary / secondary / tertiary text |
| `border` / `border-strong` | hairline / emphasised |
| `accent` / `accent-hover` / `accent-fg` / `accent-subtle` | brand. `accent-fg` = text ON accent |
| `danger` / `warn` / `success` / `info` (+ `-fg`, `-subtle`) | status. `-fg` = text on `bg`, `-subtle` = tint fill |
| `fg-on-solid` | text on any solid status fill |
| `focus-ring`, `overlay` | focus outline; scrim behind modals |

Structural tokens: `space-*` (4px scale), `text-*`/`leading-*`, `weight-*`,
`radius-*`, `border-*`, `shadow-*`, `motion-*`, `tracking-*`, `z-*`,
`control-h-*`, `control-px`, `surface-p`, `cell-py`, `safe-*`, `titlebar-h`.

## Identity vs structure

- **Identity** (colors, radius, shadows, fonts): an app MAY re-skin these by
  overriding `--wk-*` custom properties. This is the sanctioned way to give an
  app its own look.
- **Structure** (spacing scale, type scale, control heights, motion, focus
  treatment): do NOT override. Cross-app family resemblance lives here.

## Component vocabulary

Same names, same variants, everywhere:

- `Button`: `variant: primary | secondary | ghost | danger`, `size: sm | md | lg`,
  `loading`, `iconOnly` (requires `aria-label`), `asChild`.
- `variant` = visual weight. `tone` = status colour (`neutral | accent | danger |
  warn | success | info`). Never mix the two axes.
- Sizes are always `sm | md | lg`. Text sizes add `xs` and `2xl`.
- Controlled props follow React convention: `value`/`onValueChange`,
  `checked`/`onCheckedChange`, `open`/`onOpenChange`. Handlers receive the value
  directly, never a DOM event.
- Every leaf component forwards `className`, `ref`, and `...rest`.

## Themes

Built-in: `light`, `dark`, `sepia`, `night` (reading themes are first-class).
Theme = value of `data-theme` on `<html>` (or the ThemeProvider wrapper when
`target="self"`). Density = `data-density: normal | compact`.

Apps may define their own theme name by overriding role variables under
`[data-theme="myapp-dusk"]` - the provider passes unknown names through.

## Overriding (sanctioned tiers)

1. Override `--wk-*` roles in app CSS (re-skin).
2. `className` on any component (one-off restyle; wertkit CSS sits in
   `@layer wertkit.*`, so unlayered app CSS always wins).
3. `asChild` to keep behaviour, replace markup.
4. Don't use the component.

Forking a component's source into an app is NOT sanctioned - fix it upstream.

## Semantics (SEO/a11y floor)

- `Heading` requires an explicit `level`; visual `size` is decoupled.
- Tables use real `<table>/<caption>/<th scope>`.
- `Image` will not render without dimensions or an aspect ratio (CLS).
- At most one `priority` image per view (LCP).
- Icon-only controls require `aria-label`.
- Every interactive control shows `focus-ring` via `:focus-visible`.
