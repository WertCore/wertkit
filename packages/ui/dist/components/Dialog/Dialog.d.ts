import { ReactNode } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
export interface DialogProps extends RadixDialog.DialogProps {
    /** Required: every dialog needs an accessible name. Use titleHidden to hide it visually. */
    title: ReactNode;
    titleHidden?: boolean;
    description?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    trigger?: ReactNode;
    width?: string;
    showClose?: boolean;
    className?: string;
}
/**
 * Focus trap, scroll lock, Escape handling and ARIA wiring come from Radix.
 * Rendered in a portal, so opening it cannot shift the page underneath.
 */
export declare function Dialog({ title, titleHidden, description, children, footer, trigger, width, showClose, className, ...rest }: DialogProps): import("react").JSX.Element;
export declare const DialogClose: import('react').ForwardRefExoticComponent<RadixDialog.DialogCloseProps & import('react').RefAttributes<HTMLButtonElement>>;
