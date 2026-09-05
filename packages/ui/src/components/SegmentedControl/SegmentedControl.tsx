import { useCallback, useId, useRef, type ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './SegmentedControl.module.css';

export interface SegmentedOption<T extends string> {
  value: T;
  label: ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps<T extends string> {
  options: SegmentedOption<T>[];
  value: T;
  onValueChange: (value: T) => void;
  /** Accessible name for the group. Required unless ariaLabelledBy is set. */
  'aria-label'?: string;
  'aria-labelledby'?: string;
  /** Stretch to fill the container, splitting width evenly. */
  fluid?: boolean;
  className?: string;
}

/**
 * Exclusive choice among 2-5 short options - the inline alternative to Select.
 *
 * Implemented as a real radiogroup with roving tabindex: one Tab stop for the
 * whole control, arrows move between options. A row of independent buttons
 * (the common shortcut) makes every option a Tab stop and never announces the
 * group, which is why this is a component and not a CSS class.
 */
export function SegmentedControl<T extends string>({
  options,
  value,
  onValueChange,
  fluid = false,
  className,
  ...aria
}: SegmentedControlProps<T>) {
  const groupId = useId();
  const ref = useRef<HTMLDivElement>(null);

  const move = useCallback(
    (delta: number) => {
      const enabled = options.filter((o) => !o.disabled);
      if (!enabled.length) return;
      const current = enabled.findIndex((o) => o.value === value);
      const next = enabled[(current + delta + enabled.length) % enabled.length];
      onValueChange(next.value);
      // Keep DOM focus on the newly checked option, per the radiogroup pattern.
      ref.current
        ?.querySelector<HTMLButtonElement>(`[data-value="${CSS.escape(next.value)}"]`)
        ?.focus();
    },
    [options, value, onValueChange],
  );

  return (
    <div
      ref={ref}
      role="radiogroup"
      className={cn(styles.root, fluid && styles.fluid, className)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); move(1); }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      }}
      {...aria}
    >
      {options.map((option) => {
        const checked = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            id={`${groupId}-${option.value}`}
            data-value={option.value}
            aria-checked={checked}
            data-disabled={option.disabled || undefined}
            disabled={option.disabled}
            tabIndex={checked ? 0 : -1}
            className={styles.option}
            onClick={() => !option.disabled && onValueChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
