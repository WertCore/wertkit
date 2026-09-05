import { cn } from '../../utils';
import { VisuallyHidden } from '../Semantic/VisuallyHidden';
import styles from './Spinner.module.css';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  /** Announced to screen readers. Pass null inside an already-labelled region. */
  label?: string | null;
  className?: string;
}

export function Spinner({ size = 'md', label = 'Loading', className }: SpinnerProps) {
  return (
    <span role="status">
      <span className={cn(styles.root, styles[size], className)} aria-hidden="true" />
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
    </span>
  );
}
