import { ReactNode } from 'react';
export interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    description?: ReactNode;
    /** Primary (and optionally secondary) call to action. */
    action?: ReactNode;
    className?: string;
}
/**
 * The zero-data state. Rendered as a real heading + paragraph rather than
 * styled divs, so the reason a region is empty is announced and indexed.
 */
export declare function EmptyState({ icon, title, description, action, className }: EmptyStateProps): import("react").JSX.Element;
