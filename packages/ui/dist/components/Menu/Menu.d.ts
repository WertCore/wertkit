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
export interface MenuSubProps {
    /** The row that opens the submenu on hover or focus — rendered as an item. */
    trigger: ReactNode;
    /** The submenu's own items. */
    children: ReactNode;
    /** The ▸ affordance. On by default; turn OFF for an icon-only (⋯) trigger,
     *  where a second glyph would just read as noise. */
    chevron?: boolean;
    tone?: 'default' | 'danger';
    className?: string;
}
/**
 * A nested menu. Radix's own Sub primitive, so it inherits the parent's
 * keyboard model, typeahead, and pointer-safe diagonal tracking (the reason a
 * hand-rolled flyout closes the instant the cursor cuts a corner). The trigger
 * is a menu item; the content is the same surface as the top-level menu.
 */
export declare function MenuSub({ trigger, children, chevron, tone, className }: MenuSubProps): import("react").JSX.Element;
