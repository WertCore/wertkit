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
export declare function Field({ label, labelHidden, hint, error, required, children, className }: FieldProps): import("react").JSX.Element;
export {};
