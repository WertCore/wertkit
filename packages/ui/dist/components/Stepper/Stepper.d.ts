import { ReactNode } from 'react';
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
export declare function Stepper({ steps, current, orientation, className, 'aria-label': ariaLabel, }: StepperProps): import("react").JSX.Element;
