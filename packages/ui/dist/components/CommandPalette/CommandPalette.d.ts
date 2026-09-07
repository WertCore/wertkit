import { ReactNode } from 'react';
export interface CommandPaletteProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    query: string;
    onQueryChange: (query: string) => void;
    children: ReactNode;
    placeholder?: string;
    /** Accessible name for the dialog. Visually hidden. */
    title?: string;
    footer?: ReactNode;
    className?: string;
    /**
     * Replaces the leading search glyph. Pass an app's own icon so the palette
     * matches the icons its CommandItems use; omit it for wertkit's.
     *
     * Sized by the slot's font-size (wertkit icons are `1em`), so an icon that
     * hard-codes a pixel size will not follow the row.
     */
    searchIcon?: ReactNode;
}
/**
 * The Cmd+K surface: overlay, filter input, and a keyboard-driven listbox.
 *
 * Filtering and command registries stay in the app - this owns only the
 * interaction and the ARIA. The input keeps focus and drives the list through
 * aria-activedescendant (combobox pattern), so arrows move the highlight
 * without focus ever leaving the field.
 */
export declare function CommandPalette({ open, onOpenChange, query, onQueryChange, children, placeholder, title, footer, className, searchIcon, }: CommandPaletteProps): import("react").JSX.Element;
export declare function CommandGroup({ heading, children }: {
    heading?: ReactNode;
    children: ReactNode;
}): import("react").JSX.Element;
export interface CommandItemProps {
    id: string;
    children: ReactNode;
    onSelect: () => void;
    icon?: ReactNode;
    /** Right-aligned annotation - a shortcut, path, or source. */
    hint?: ReactNode;
}
export declare function CommandItem({ id, children, onSelect, icon, hint }: CommandItemProps): import("react").JSX.Element;
export declare function CommandEmpty({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
