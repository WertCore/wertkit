import type { HTMLAttributes } from 'react';
import { cn } from '../../utils';
import styles from './Badge.module.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'accent' | 'danger' | 'warn' | 'success' | 'info';
  mono?: boolean;
}

export function Badge({ tone = 'neutral', mono = false, className, ...rest }: BadgeProps) {
  return <span className={cn(styles.root, styles[tone], mono && styles.mono, className)} {...rest} />;
}
