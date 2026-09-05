import { HTMLAttributes } from 'react';
import { TextSize } from './Heading';
export interface TextProps extends HTMLAttributes<HTMLElement> {
    as?: 'p' | 'span' | 'div' | 'label' | 'dd' | 'dt';
    size?: TextSize;
    tone?: 'default' | 'muted' | 'subtle' | 'danger';
    mono?: boolean;
}
export declare const Text: import('react').ForwardRefExoticComponent<TextProps & import('react').RefAttributes<HTMLElement>>;
