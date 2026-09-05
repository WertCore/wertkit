import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils';
import styles from './Semantic.module.css';

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

const defaultSize: Record<HeadingLevel, TextSize> = {
  1: '2xl', 2: 'xl', 3: 'lg', 4: 'md', 5: 'sm', 6: 'xs',
};

/** A CSS class cannot begin with a digit, so '2xl' maps to .xxl. */
export const sizeClassName: Record<TextSize, string> = {
  xs: styles.xs, sm: styles.sm, md: styles.md,
  lg: styles.lg, xl: styles.xl, '2xl': styles.xxl,
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { level, size, className, ...rest },
  ref,
) {
  const Tag = `h${level}` as const;
  const sizeClass = sizeClassName[size ?? defaultSize[level]];
  return <Tag ref={ref} className={cn(styles.heading, sizeClass, className)} {...rest} />;
});
