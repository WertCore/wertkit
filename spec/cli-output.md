# wertkit CLI output contract

The design system for terminal surfaces. Rust/Go/Node tools follow this spec;
`@wertkit/tokens` generates `tokens.rs` with the ANSI role mapping.

## Colour

- Default to the ANSI-16 mapping (`ansi(role)` in tokens.rs). The user's
  terminal palette IS the theme - truecolor hex is opt-in (`--color=always` plus
  an explicit flag or config).
- Honour `NO_COLOR` (https://no-color.org) and drop colour when stdout is not a
  TTY. Decide once at startup, not per-line.
- Roles, not colours, in code: `danger` not "red".

## Symbols

| Meaning | Glyph | ASCII fallback |
|---|---|---|
| success | `✓` | `OK` |
| failure | `✗` | `FAIL` |
| warning | `!` | `WARN` |
| progress step | `→` | `->` |
| bullet | `•` | `*` |

Detect UTF-8 from the locale; fall back to ASCII silently.

## Errors

```
error: could not read config file
  --> ~/.config/knockport/config.toml
  = help: run `knockport init` to create one
```

`error:`/`warning:` prefix on fg-danger/fg-warn, path on fg-muted, one `help:`
line when a next step exists. Errors go to stderr, always.

## Machine output

- Every list/inspect command grows `--json` (stable schema, documented).
- Exit codes: 0 success, 1 operational failure, 2 usage error.
- `--quiet` silences everything but errors; `--verbose` adds fg-subtle detail.

## Tables

Right-align numerics, mono everything (it already is), two-space gutters,
header row on fg-muted - same hierarchy the web Table shows.
