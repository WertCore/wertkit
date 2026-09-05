import { HTMLAttributes } from 'react';
/**
 * Present to screen readers and crawlers, invisible on screen. Use for context
 * a sighted user gets from layout - "Read more <VisuallyHidden>about billing
 * </VisuallyHidden>" - rather than hiding text with display:none, which
 * removes it from the accessibility tree and the indexed content entirely.
 */
export declare function VisuallyHidden({ className, ...rest }: HTMLAttributes<HTMLSpanElement>): import("react").JSX.Element;
