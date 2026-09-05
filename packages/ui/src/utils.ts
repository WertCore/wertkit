/** Join class names. Kept local so @wertkit/ui stays dependency-light. */
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ');
}
