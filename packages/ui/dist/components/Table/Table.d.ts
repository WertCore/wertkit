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
}
export declare function Table({ caption, captionHidden, interactive, className, children, ...rest }: TableProps): import("react").JSX.Element;
export declare const Thead: (p: HTMLAttributes<HTMLTableSectionElement>) => import("react").JSX.Element;
export declare const Tbody: (p: HTMLAttributes<HTMLTableSectionElement>) => import("react").JSX.Element;
export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
    selected?: boolean;
}
export declare const Tr: ({ selected, className, ...rest }: TrProps) => import("react").JSX.Element;
export interface ThProps extends ThHTMLAttributes<HTMLTableCellElement> {
    numeric?: boolean;
}
/** scope defaults to "col" - the association screen readers and parsers rely on. */
export declare const Th: ({ numeric, scope, className, ...rest }: ThProps) => import("react").JSX.Element;
export interface TdProps extends TdHTMLAttributes<HTMLTableCellElement> {
    numeric?: boolean;
}
export declare const Td: ({ numeric, className, ...rest }: TdProps) => import("react").JSX.Element;
