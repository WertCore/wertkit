import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '../../utils';
import { useField } from '../Field/Field';
import styles from './Textarea.module.css';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  /** Monospace body - request bodies, scripts, raw payloads. */
  mono?: boolean;
  resizable?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { invalid, mono = false, resizable = true, className, id, rows = 4, ...rest },
  ref,
) {
  const field = useField();
  const isInvalid = invalid ?? field?.invalid ?? false;
  return (
    <textarea
      ref={ref}
      id={id ?? field?.inputId}
      rows={rows}
      aria-invalid={isInvalid || undefined}
      aria-describedby={field?.describedBy}
      className={cn(styles.root, mono && styles.mono, !resizable && styles.noResize, className)}
      {...rest}
    />
  );
});
