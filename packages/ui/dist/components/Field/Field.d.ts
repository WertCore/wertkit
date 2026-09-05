import { ReactNode } from 'react';
interface FieldContextValue {
    inputId: string;
    describedBy?: string;
    invalid: boolean;
}
/** Consumed by Input/Select/etc. so a11y wiring happens without the caller. */
export declare const useField: () => FieldContextValue | null;
export interface FieldProps {
    label?: ReactNode;
    hint?: ReactNode;
    /** Presence flips the field to the invalid state and replaces the hint. */
    error?: ReactNode;
    required?: boolean;
    children: ReactNode;
    className?: string;
}
export declare function Field({ label, hint, error, required, children, className }: FieldProps): import("react").JSX.Element;
export {};
