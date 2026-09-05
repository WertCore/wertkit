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
export declare function HighlightText({ text, query, className }: HighlightTextProps): import("react").JSX.Element;
