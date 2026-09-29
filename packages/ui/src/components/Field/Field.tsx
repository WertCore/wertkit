import { createContext, useContext, useId, type ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './Field.module.css';

interface FieldContextValue {
  inputId: string;
  describedBy?: string;
  invalid: boolean;
}

const FieldContext = createContext<FieldContextValue | null>(null);

/** Consumed by Input/Select/etc. so a11y wiring happens without the caller. */
export const useField = () => useContext(FieldContext);

export interface FieldProps {
  label?: ReactNode;
  /**
   * Keep the label as the control's accessible name but take it off screen.
   *
   * The settings-page pairing is `SettingRow` for the row and `Field` for the
   * control's own a11y wiring, and `SettingRow`'s label is deliberately not a
   * `<label>` - so nesting a `Field` with a visible label prints the same text
   * twice. This is the same escape `Table`'s `captionHidden` provides: the
   * association and the announcement stay, the pixels go.
   */
  labelHidden?: boolean;
  hint?: ReactNode;
  /** Presence flips the field to the invalid state and replaces the hint. */
  error?: ReactNode;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export function Field({ label, labelHidden = false, hint, error, required, children, className }: FieldProps) {
  const id = useId();
  const inputId = `${id}-input`;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const invalid = Boolean(error);
  const describedBy = [error ? errorId : null, hint ? hintId : null]
    .filter(Boolean)
    .join(' ') || undefined;

  return (
    <FieldContext.Provider value={{ inputId, describedBy, invalid }}>
      <div className={cn(styles.root, className)}>
        {label && (
          <label className={cn(styles.label, labelHidden && styles.labelHidden)} htmlFor={inputId}>
            {label}
            {required && (
              <span className={styles.required} aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        {children}
        {error ? (
          <p className={styles.error} id={errorId} role="alert">
            {error}
          </p>
        ) : (
          hint && (
            <p className={styles.hint} id={hintId}>
              {hint}
            </p>
          )
        )}
      </div>
    </FieldContext.Provider>
  );
}
