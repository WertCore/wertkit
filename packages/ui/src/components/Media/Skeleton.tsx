import type { CSSProperties, HTMLAttributes } from 'react';
import { cn } from '../../utils';
import styles from './Media.module.css';

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  /** Any CSS length. Required so the placeholder reserves the real box. */
  width?: string | number;
  height?: string | number;
  radius?: 'sm' | 'md' | 'lg' | 'full';
}

/**
 * Loading placeholder that occupies the same space as the content replacing it.
 * aria-hidden with aria-busy on the region is the right pairing - a skeleton
 * should not be announced as content.
 */
export function Skeleton({
  width = '100%',
  height = '1em',
  radius = 'sm',
  className,
  style,
  ...rest
}: SkeletonProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(styles.skeleton, className)}
      style={{
        width,
        height,
        borderRadius: `var(--wk-radius-${radius})`,
        ...style,
      } as CSSProperties}
      {...rest}
    />
  );
}
