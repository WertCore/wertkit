import { ReactNode } from 'react';
import * as RadixMenu from '@radix-ui/react-dropdown-menu';
export interface MenuProps extends RadixMenu.DropdownMenuProps {
    trigger: ReactNode;
    children: ReactNode;
    align?: 'start' | 'center' | 'end';
    side?: 'top' | 'right' | 'bottom' | 'left';
    className?: string;
}
export declare function Menu({ trigger, children, align, side, className, ...rest }: MenuProps): import("react").JSX.Element;
export interface MenuItemProps extends RadixMenu.DropdownMenuItemProps {
    tone?: 'default' | 'danger';
    /** Right-aligned hint, e.g. "⌘K". Presentational only - bind the key yourself. */
    shortcut?: string;
}
export declare const MenuItem: import('react').ForwardRefExoticComponent<MenuItemProps & import('react').RefAttributes<HTMLDivElement>>;
export declare function MenuLabel({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function MenuSeparator(): import("react").JSX.Element;
