import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils';
import { useField } from '../Field/Field';
import styles from './Input.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  invalid?: boolean;
  /** Monospace field - URLs, headers, tokens, paths. */
  mono?: boolean;
  /** Decorative leading adornment (usually an icon). Not focusable. */
  startSlot?: ReactNode;
  /** Trailing adornment. Interactive content here must be focusable itself. */
  endSlot?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    size = 'md', invalid, mono = false, startSlot, endSlot,
    className, id, 'aria-describedby': describedBy, ...rest
  },
  ref,
) {
  // Inherits id / aria wiring from a surrounding <Field>, if there is one.
  const field = useField();
  const isInvalid = invalid ?? field?.invalid ?? false;

  const input = (
    <input
      ref={ref}
      id={id ?? field?.inputId}
      aria-invalid={isInvalid || undefined}
      aria-describedby={describedBy ?? field?.describedBy}
      className={cn(
        styles.root,
        styles[size],
        mono && styles.mono,
        startSlot && styles.hasStart,
        endSlot && styles.hasEnd,
        !startSlot && !endSlot && className,
      )}
      {...rest}
    />
  );

  if (!startSlot && !endSlot) return input;

  return (
    <span className={cn(styles.shell, className)} data-invalid={isInvalid || undefined}>
      {startSlot && <span className={cn(styles.slot, styles.start)} aria-hidden="true">{startSlot}</span>}
      {input}
      {endSlot && <span className={cn(styles.slot, styles.end)}>{endSlot}</span>}
    </span>
  );
});
