# Contributing

## Commits

- Author and committer: `prasad <prasadzore129@yahoo.com>`.
- **No AI or AI-agent attribution of any kind** - no `Co-Authored-By: Claude`,
  no `Generated with`, no tool trailers. Verify before pushing:
  `git log --format='%an %ae %(trailers)' -5` - trailers must be empty.
- Imperative subject, ≤ 72 chars. Body only when the diff can't speak.

## Changes

- Token changes: edit `packages/tokens/src/**`, then `pnpm tokens`. Never edit
  `dist/` by hand; it's generated (and committed, so consuming git deps work).
- Component changes: keep the naming contract (`spec/naming.md`). New variants
  land in the spec in the same PR.
- Every component keeps: `className`/`ref`/rest forwarding, `:focus-visible`
  ring, keyboard path, and the CLS rules (no unreserved space).
- Check all four themes and both densities in `preview/` before merging.
