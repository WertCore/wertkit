import type { ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './EmptyState.module.css';

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: ReactNode;
  /** Primary (and optionally secondary) call to action. */
  action?: ReactNode;
  className?: string;
}

/**
 * The zero-data state. Rendered as a real heading + paragraph rather than
 * styled divs, so the reason a region is empty is announced and indexed.
 */
export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn(styles.root, className)}>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <p className={styles.title}>{title}</p>
      {description && <p className={styles.description}>{description}</p>}
      {action && <div className={styles.actions}>{action}</div>}
    </div>
  );
}
