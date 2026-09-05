import { ReactNode } from 'react';
export interface TreeProps {
    children: ReactNode;
    /** Fires when an item is activated by Enter/Space or click. */
    onActivate?: (id: string) => void;
    /** Fires for ArrowRight on a collapsed node / ArrowLeft on an expanded one. */
    onToggle?: (id: string, expanded: boolean) => void;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    className?: string;
}
/**
 * Accessible tree container.
 *
 * Deliberately does NOT own the data: callers pass already-flattened rows as
 * TreeItem children. That keeps it compatible with windowing - render only the
 * visible slice through any virtualiser and pass posInSet/setSize so the full
 * size is still announced. A tree that owns its data cannot be virtualised
 * without forking it.
 *
 * Roving tabindex: the tree is one Tab stop; arrows move between items.
 */
export declare function Tree({ children, onActivate, onToggle, className, ...aria }: TreeProps): import("react").JSX.Element;
export interface TreeItemProps {
    id: string;
    /** 1-based depth. Required: aria-level is how depth is conveyed. */
    level: number;
    children: ReactNode;
    hasChildren?: boolean;
    expanded?: boolean;
    selected?: boolean;
    /** Leading glyph, rendered after the twisty. */
    icon?: ReactNode;
    /** Trailing content - counts, method tags, hover actions. */
    endSlot?: ReactNode;
    onSelect?: (id: string) => void;
    onToggle?: (id: string, expanded: boolean) => void;
    /** Pass both when windowing, so the full set size is still announced. */
    posInSet?: number;
    setSize?: number;
    indent?: number;
    className?: string;
}
export declare function TreeItem({ id, level, children, hasChildren, expanded, selected, icon, endSlot, onSelect, onToggle, posInSet, setSize, indent, className, }: TreeItemProps): import("react").JSX.Element;
