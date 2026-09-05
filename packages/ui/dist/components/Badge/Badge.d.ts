import { HTMLAttributes } from 'react';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: 'neutral' | 'accent' | 'danger' | 'warn' | 'success' | 'info';
    mono?: boolean;
}
export declare function Badge({ tone, mono, className, ...rest }: BadgeProps): import("react").JSX.Element;
