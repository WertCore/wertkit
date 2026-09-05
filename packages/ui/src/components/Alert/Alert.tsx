import type { ReactNode } from 'react';
import { cn } from '../../utils';
import { CloseIcon } from '../../icons';
import styles from './Alert.module.css';

export type AlertTone = 'info' | 'success' | 'warn' | 'danger';

export interface AlertProps {
  tone?: AlertTone;
  title?: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  onDismiss?: () => void;
  /** Edge-to-edge, square: docks under a titlebar as an app-wide banner. */
  banner?: boolean;
  className?: string;
}

/**
 * Inline, persistent message. Unlike Toast this stays until the condition
 * clears, so it is the right control for degraded-state banners.
 *
 * role=alert on danger interrupts a screen reader immediately; the quieter
 * tones use role=status so they are announced without stealing focus.
 */
export function Alert({
  tone = 'info',
  title,
  children,
  icon,
  action,
  onDismiss,
  banner = false,
  className,
}: AlertProps) {
  return (
    <div
      role={tone === 'danger' ? 'alert' : 'status'}
      className={cn(styles.root, styles[tone], banner && styles.banner, className)}
    >
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <div className={styles.body}>
        {title && <span className={styles.title}>{title}</span>}
        {children}
        {action && <div className={styles.actions}>{action}</div>}
      </div>
      {onDismiss && (
        <button type="button" className={styles.close} onClick={onDismiss} aria-label="Dismiss">
          <CloseIcon />
        </button>
      )}
    </div>
  );
}
