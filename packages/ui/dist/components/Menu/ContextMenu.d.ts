import { ReactNode } from 'react';
import * as RadixContextMenu from '@radix-ui/react-context-menu';
/**
 * A right-click menu.
 *
 * Shares `Menu.module.css` with `Menu`, so the two are the same surface with
 * two triggers rather than two designs. The parts are separate components and
 * not re-exports of `MenuItem`, because Radix's context menu is its own
 * primitive: a `DropdownMenu.Item` inside a `ContextMenu.Content` renders
 * outside its own root and loses keyboard handling entirely.
 *
 * Radix supplies what a hand-rolled version reliably gets wrong: anchoring to
 * the pointer with collision handling, typeahead, and focus return to the
 * trigger.
 *
 * The keyboard path comes free because this listens for the PLATFORM's
 * `contextmenu` event rather than for a right-click: browsers raise the same
 * event for `Shift+F10` and the Menu key, with no pointer coordinates. A
 * hand-rolled `onMouseDown`/`button === 2` check is what makes a context menu
 * mouse-only, and that is the usual mistake.
 *
 * Always an ACCELERATOR. Every item belongs on a visible control too; a menu
 * reachable only by right-click is undiscoverable, and inside a browser it is
 * competing with the one the user already knows.
 */
export interface ContextMenuProps extends RadixContextMenu.ContextMenuProps {
    /** The region that responds to a right-click. */
    trigger: ReactNode;
    children: ReactNode;
    className?: string;
}
export declare function ContextMenu({ trigger, children, className, ...rest }: ContextMenuProps): import("react").JSX.Element;
export interface ContextMenuItemProps extends RadixContextMenu.ContextMenuItemProps {
    tone?: 'default' | 'danger';
    /** Right-aligned hint, e.g. "⌫". Presentational only - bind the key yourself. */
    shortcut?: string;
}
export declare const ContextMenuItem: import('react').ForwardRefExoticComponent<ContextMenuItemProps & import('react').RefAttributes<HTMLDivElement>>;
export declare function ContextMenuLabel({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function ContextMenuSeparator(): import("react").JSX.Element;
