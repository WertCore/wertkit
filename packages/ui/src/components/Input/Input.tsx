import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils';
import { useField } from '../Field/Field';
import styles from './Input.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  invalid?: boolean;
  /** Monospace field - URLs, headers, tokens, paths. */
  mono?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = 'md', invalid, mono = false, className, id, 'aria-describedby': describedBy, ...rest },
  ref,
) {
  // Inherits id / aria wiring from a surrounding <Field>, if there is one.
  const field = useField();
  const isInvalid = invalid ?? field?.invalid ?? false;

  return (
    <input
      ref={ref}
      id={id ?? field?.inputId}
      aria-invalid={isInvalid || undefined}
      aria-describedby={describedBy ?? field?.describedBy}
      className={cn(styles.root, styles[size], mono && styles.mono, className)}
      {...rest}
    />
  );
});
