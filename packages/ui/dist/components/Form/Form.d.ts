import { ReactNode } from 'react';
export interface FormSectionProps {
    title?: ReactNode;
    description?: ReactNode;
    children: ReactNode;
    /** Top-right slot - a toggle, "Add", or a Badge. */
    action?: ReactNode;
    className?: string;
}
/**
 * A titled group of settings. Renders a real <section> wired to its heading
 * with aria-labelledby, so each group is a navigable landmark rather than a
 * styled div.
 */
export declare function FormSection({ title, description, children, action, className }: FormSectionProps): import("react").JSX.Element;
export interface SettingRowProps {
    label: ReactNode;
    description?: ReactNode;
    children: ReactNode;
    /** Put the control on its own line - for inputs and selects that need width. */
    stacked?: boolean;
    className?: string;
}
/**
 * Label and description on one side, control on the other - the settings-page
 * workhorse. Stacks below 560px so a narrowed Tauri window stays usable.
 *
 * The label is intentionally not a <label> element: the control is often a
 * group (radios, a segmented control) that a single label cannot legally point
 * at. Nest a Field inside when you need true label-for-input association.
 */
export declare function SettingRow({ label, description, children, stacked, className }: SettingRowProps): import("react").JSX.Element;
