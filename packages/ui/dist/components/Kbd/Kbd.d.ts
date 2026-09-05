import { HTMLAttributes } from 'react';
export interface KbdProps extends HTMLAttributes<HTMLElement> {
    /** Split a chord into one key cap per token: keys={['⌘','K']}. */
    keys?: string[];
}
/** Renders a real <kbd>, which is what assistive tech expects for shortcuts. */
export declare function Kbd({ keys, className, children, ...rest }: KbdProps): import("react").JSX.Element;
