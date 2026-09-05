import { HTMLAttributes } from 'react';
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    /**
     * Semantic level - drives the rendered tag. Required, so a document always
     * has a real heading outline for crawlers and screen readers rather than
     * styled divs.
     */
    level: HeadingLevel;
    /**
     * Visual size, decoupled from level. Lets an h2 look small without breaking
     * the outline - the usual reason teams reach for the wrong tag.
     */
    size?: TextSize;
}
/** A CSS class cannot begin with a digit, so '2xl' maps to .xxl. */
export declare const sizeClassName: Record<TextSize, string>;
export declare const Heading: import('react').ForwardRefExoticComponent<HeadingProps & import('react').RefAttributes<HTMLHeadingElement>>;
