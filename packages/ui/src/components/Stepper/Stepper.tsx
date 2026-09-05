import type { ReactNode } from 'react';
import { cn } from '../../utils';
import { CheckIcon } from '../../icons';
import { VisuallyHidden } from '../Semantic/VisuallyHidden';
import styles from './Stepper.module.css';

export interface Step {
  label: ReactNode;
  description?: ReactNode;
}

export interface StepperProps {
  steps: readonly (string | Step)[];
  /** Zero-based index of the active step. Everything before it is complete. */
  current: number;
  orientation?: 'horizontal' | 'vertical';
  /** Required: a bare list of steps is meaningless without saying what of. */
  'aria-label': string;
  className?: string;
}

/**
 * Progress through a fixed, ordered sequence.
 *
 * A real `<ol>` rather than styled divs, because the steps *are* an ordered
 * list, and `aria-current="step"` is the property that tells assistive tech
 * where you are. Completed and upcoming states carry visually-hidden text too:
 * position in a sequence is exactly the thing a colour change alone fails to
 * convey.
 *
 * Deliberately presentational — it shows progress and never owns it. Gating
 * navigation is the caller's job, since only the caller knows whether step
 * three is reachable yet.
 */
export function Stepper({
  steps,
  current,
  orientation = 'horizontal',
  className,
  'aria-label': ariaLabel,
}: StepperProps) {
  return (
    <ol className={cn(styles.root, styles[orientation], className)} aria-label={ariaLabel}>
      {steps.map((step, index) => {
        const { label, description } =
          typeof step === 'string' ? { label: step, description: undefined } : step;
        const state = index < current ? 'complete' : index === current ? 'current' : 'upcoming';

        return (
          <li
            key={index}
            className={cn(styles.step, styles[state])}
            aria-current={state === 'current' ? 'step' : undefined}
          >
            <span className={styles.marker} aria-hidden="true">
              {state === 'complete' ? <CheckIcon /> : index + 1}
            </span>
            <span className={styles.text}>
              <span className={styles.label}>
                {label}
                <VisuallyHidden>
                  {state === 'complete'
                    ? ' (completed)'
                    : state === 'current'
                      ? ' (current step)'
                      : ' (not started)'}
                </VisuallyHidden>
              </span>
              {description && <span className={styles.description}>{description}</span>}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
