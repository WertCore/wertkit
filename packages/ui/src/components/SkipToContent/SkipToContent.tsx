import { cn } from '../../utils';
import styles from './SkipToContent.module.css';

export interface SkipToContentProps {
  /** id of the main region, without the '#'. AppShell's <main> is a good target. */
  targetId?: string;
  children?: string;
  className?: string;
}

/**
 * Keyboard bypass link. Render as the first child of the app so a keyboard user
 * can jump past the sidebar and toolbars instead of tabbing through them on
 * every page.
 *
 * WCAG 2.4.1. Hidden until focused, then visible.
 */
export function SkipToContent({
  targetId = 'wk-main',
  children = 'Skip to content',
  className,
}: SkipToContentProps) {
  return (
    <a href={`#${targetId}`} className={cn(styles.root, className)}>
      {children}
    </a>
  );
}
