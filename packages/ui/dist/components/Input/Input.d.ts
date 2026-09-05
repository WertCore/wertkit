import { InputHTMLAttributes, ReactNode } from 'react';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: 'sm' | 'md' | 'lg';
    invalid?: boolean;
    /** Monospace field - URLs, headers, tokens, paths. */
    mono?: boolean;
    /** Decorative leading adornment (usually an icon). Not focusable. */
    startSlot?: ReactNode;
    /** Trailing adornment. Interactive content here must be focusable itself. */
    endSlot?: ReactNode;
}
export declare const Input: import('react').ForwardRefExoticComponent<InputProps & import('react').RefAttributes<HTMLInputElement>>;
