import { Fragment } from 'react';
import styles from './HighlightText.module.css';

export interface HighlightTextProps {
  text: string;
  /** Substring to mark. Matching is case-insensitive; empty disables it. */
  query: string;
  className?: string;
}

/**
 * Marks query matches inside a string - search results, palette hits, filtered
 * tree labels.
 *
 * Uses <mark>, which carries the "relevant to the current context" semantic and
 * is announced, rather than a coloured <span> that a screen reader skips
 * silently. Matching is done by scanning, not by building a RegExp from user
 * input, so a query like "a(" cannot throw or backtrack pathologically.
 */
export function HighlightText({ text, query, className }: HighlightTextProps) {
  const needle = query.trim().toLowerCase();
  if (!needle) return <span className={className}>{text}</span>;

  const haystack = text.toLowerCase();
  const parts: Array<{ chunk: string; hit: boolean }> = [];
  let cursor = 0;

  while (cursor < text.length) {
    const at = haystack.indexOf(needle, cursor);
    if (at === -1) {
      parts.push({ chunk: text.slice(cursor), hit: false });
      break;
    }
    if (at > cursor) parts.push({ chunk: text.slice(cursor, at), hit: false });
    parts.push({ chunk: text.slice(at, at + needle.length), hit: true });
    cursor = at + needle.length;
  }

  return (
    <span className={className}>
      {parts.map((p, i) => (
        <Fragment key={i}>{p.hit ? <mark className={styles.mark}>{p.chunk}</mark> : p.chunk}</Fragment>
      ))}
    </span>
  );
}
