import type { ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './EmptyState.module.css';

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: ReactNode;
  /** Primary (and optionally secondary) call to action. */
  action?: ReactNode;
  /**
   * Heading level for the title, 1-6. Defaults to 2.
   *
   * Configurable rather than fixed because an empty state can sit anywhere: a
   * whole blank page wants `h1`, a card inside a section wants `h3`. Hard-coding
   * one level makes the document outline wrong everywhere else, which is its own
   * accessibility defect — a skipped level reads as a missing section.
   */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

/**
 * The zero-data state. The title is a real heading and the description a real
 * paragraph, so the reason a region is empty is ANNOUNCED — it appears in the
 * document outline and in a screen reader's heading list, which is how someone
 * navigating by structure finds out a region is empty rather than broken.
 */
export function EmptyState({
  icon,
  title,
  description,
  action,
  headingLevel = 2,
  className,
}: EmptyStateProps) {
  // This said "rendered as a real heading" in its own doc comment while
  // rendering a <p>. The claim was the reason to reach for the component, and
  // it was not true: nothing announced, nothing in the outline.
  const Heading = `h${headingLevel}` as const;
  return (
    <div className={cn(styles.root, className)}>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <Heading className={styles.title}>{title}</Heading>
      {description && <p className={styles.description}>{description}</p>}
      {action && <div className={styles.actions}>{action}</div>}
    </div>
  );
}
