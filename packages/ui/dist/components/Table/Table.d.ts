import { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';
export interface TableProps extends HTMLAttributes<HTMLTableElement> {
    /**
     * Describes the table. Rendered as a real <caption> - visible to readers and
     * indexed, unlike a heading placed above the table with no association.
     */
    caption?: ReactNode;
    captionHidden?: boolean;
    /** Adds row hover affordance. Purely visual. */
    interactive?: boolean;
    /**
     * Pins the header row while the body scrolls. Needs something to scroll
     * against - either `maxBlockSize` or a height-constrained parent.
     */
    stickyHeader?: boolean;
    /**
     * Caps the scroll container, e.g. `'100%'` or `'40rem'`. Any CSS length.
     * Setting it turns the wrapper into a vertical scroll container; without it
     * the wrapper only scrolls horizontally, as before.
     */
    maxBlockSize?: string;
}
export declare function Table({ caption, captionHidden, interactive, stickyHeader, maxBlockSize, className, children, ...rest }: TableProps): import("react").JSX.Element;
export declare const Thead: (p: HTMLAttributes<HTMLTableSectionElement>) => import("react").JSX.Element;
export declare const Tbody: (p: HTMLAttributes<HTMLTableSectionElement>) => import("react").JSX.Element;
export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
    selected?: boolean;
}
export declare const Tr: ({ selected, className, ...rest }: TrProps) => import("react").JSX.Element;
export interface ThProps extends ThHTMLAttributes<HTMLTableCellElement> {
    numeric?: boolean;
    /**
     * Makes the header a sort control: the label becomes a button and the cell
     * carries aria-sort, which is how a screen reader learns the table is sorted
     * and by which column. A clickable <th> with neither is a control only a
     * mouse user can find.
     */
    sortable?: boolean;
    /** This column's current sort, or null when the table is sorted by another. */
    sortDirection?: 'asc' | 'desc' | null;
    /**
     * Called with the direction the column should take next — ascending unless
     * it is already ascending. Every table would otherwise write the same flip.
     */
    onSort?: (next: 'asc' | 'desc') => void;
}
/** scope defaults to "col" - the association screen readers and parsers rely on. */
export declare const Th: ({ numeric, sortable, sortDirection, onSort, scope, className, children, ...rest }: ThProps) => import("react").JSX.Element;
export interface TdProps extends TdHTMLAttributes<HTMLTableCellElement> {
    numeric?: boolean;
}
export declare const Td: ({ numeric, className, ...rest }: TdProps) => import("react").JSX.Element;
