import { ReactNode } from 'react';
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
export declare function SegmentedControl<T extends string>({ options, value, onValueChange, fluid, className, ...aria }: SegmentedControlProps<T>): import("react").JSX.Element;
