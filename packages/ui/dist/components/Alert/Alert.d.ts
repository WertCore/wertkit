import { ReactNode } from 'react';
export type AlertTone = 'info' | 'success' | 'warn' | 'danger';
export interface AlertProps {
    tone?: AlertTone;
    title?: ReactNode;
    children?: ReactNode;
    icon?: ReactNode;
    action?: ReactNode;
    onDismiss?: () => void;
    /** Edge-to-edge, square: docks under a titlebar as an app-wide banner. */
    banner?: boolean;
    className?: string;
}
/**
 * Inline, persistent message. Unlike Toast this stays until the condition
 * clears, so it is the right control for degraded-state banners.
 *
 * role=alert on danger interrupts a screen reader immediately; the quieter
 * tones use role=status so they are announced without stealing focus.
 */
export declare function Alert({ tone, title, children, icon, action, onDismiss, banner, className, }: AlertProps): import("react").JSX.Element;
