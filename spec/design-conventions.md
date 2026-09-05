# wertkit design conventions

Two rules govern everything added here: it is **minimalistic**, and it is
**SEO-sound**. Both are constraints on the component itself, not advice for the
app consuming it. An app can re-skin identity tokens; it cannot fix markup we
got wrong.

Read this with [naming.md](naming.md), which covers what things are called. This
covers how they should look and what they should emit.

---

## Minimalistic

Not "small scope" — small *visual weight*. The library should read as quiet
enough that an app's own content is the loudest thing on screen.

### The escalation ladder

Reach for the cheapest separation that works, and stop there:

1. **Whitespace.** Most things that look like they need a container just need
   space around them.
2. **A hairline.** `--wk-border-thin` against `--wk-border`.
3. **A background.** `--wk-bg-subtle`, `--wk-bg-raised` or `--wk-bg-inset`.
4. **A shadow.** Only for something genuinely floating above the page — a
   popover, a dialog, a dragged item.

Going straight to step 4 is the usual mistake. A component that needs heavy
chrome to be legible is usually the wrong component.

### Concretely

| Property | Convention |
|---|---|
| Borders | Hairlines. `--wk-border-thick` is for focus rings and emphasis, not structure |
| Radii | The 6/8/12 set — `--wk-radius-sm`/`md`/`lg`. `radius-full` for pills and dots only |
| Shadows | `--wk-shadow-sm`/`md`, both deliberately soft and diffuse. Never a hard drop shadow |
| Headings | `--wk-tracking-tight`. Body text stays at normal tracking |
| Whitespace | Generous. Prefer one size up from what looks sufficient |
| Colour | Roles only. Never a hex, never a named colour, never `!important` |
| Density | Everything must survive `data-density="compact"` and `pointer: coarse` upsizing |

### Where the CSS lives

`@layer wertkit.components`. Unlayered app CSS outranks it, which is the
sanctioned re-skin path — but it also means an app can silently defeat you.
A real example: an app set `position: relative` on a `th` and killed `Table`'s
`stickyHeader` without any error. Structural properties a component depends on
deserve a comment saying so.

---

## SEO-sound

The markup has to be right before it is styled, because a crawler and a screen
reader walk the same tree. This is not an accessibility appendix — it is the
same work.

### Headings carry a level, never a fixed tag

`Heading` makes `level` **required** so a document always has a real outline.
Any component that renders a heading must let the caller set it.

```tsx
// Wrong — breaks the outline wherever this sits at another depth
<h3 className={styles.title}>{title}</h3>

// Right — semantics move, visual size does not
const TitleTag = `h${titleLevel}` as const;
<TitleTag className={styles.title}>{title}</TitleTag>
```

`Card` shipped with the wrong version of this and was corrected. The decoupling
of *level* from *size* exists precisely so nobody has to pick the wrong tag to
get the right look.

### Real elements

| Need | Use | Not |
|---|---|---|
| Something clickable | `<button type="button">` | `<div onClick>` |
| Something that navigates | `<a href>` | a button that calls `router.push` |
| An ordered sequence | `<ol>` | divs with numbers |
| Tabular data | `<table>` with `<th scope>` | a grid of divs |
| Page regions | `<main>`, `<nav>`, `<section aria-labelledby>` | unlabelled divs |

`asChild` exists so a caller can supply the right element when the component
cannot know it — a card that navigates should be an `<a>`, not a button.

### The rest

- **Images declare dimensions.** `Image` requires them; a missing intrinsic size
  is layout shift, which is both a ranking signal and an annoyance.
- **Icon-only controls carry `aria-label`.** A tooltip is supplementary, never
  the only label.
- **State conveyed by colour is also conveyed in text.** Use `VisuallyHidden`
  when the text would be redundant to a sighted user — `Stepper` does this for
  completed and upcoming steps.
- **SSR-safe.** No `window` or `localStorage` during render. `ThemeProvider`
  adopts stored preferences only after hydration, and `ThemeScript` exists so
  the first paint is already themed.
- **Structured data where it applies.** `JsonLd` and `Breadcrumbs` are part of
  the library for this reason.

---

## Before adding a component

- [ ] Could this be composition of existing primitives instead?
- [ ] Is it stateless, or is its state genuinely intrinsic?
- [ ] Does it have, or will it plausibly have, more than one consumer?
- [ ] Does it encode accessibility work apps would otherwise get wrong?
- [ ] Does every heading take a level?
- [ ] Is every interactive thing a real interactive element?
- [ ] Does it read correctly in light, dark, sepia and night, at both densities?
- [ ] Does the preview kitchen sink show it?

The third question is the one that usually decides it. Two real consumers means
the API is being designed against reality; one means it is being designed
against a guess.
