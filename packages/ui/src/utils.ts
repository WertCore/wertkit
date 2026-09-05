/**
 * Join class names. Kept local so @wertkit/ui stays dependency-light.
 *
 * Accepts anything and keeps only non-empty strings: `cond && styles.x` guards
 * are common, and when `cond` is a ReactNode it can legitimately be `0`, which
 * a narrower signature would reject at the call site.
 */
export function cn(...values: unknown[]): string {
  return values.filter((v): v is string => typeof v === 'string' && v !== '').join(' ');
}
