import { ReactNode } from 'react';
export interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    description?: ReactNode;
    /** Primary (and optionally secondary) call to action. */
    action?: ReactNode;
    /**
     * Heading level for the title, 1-6. Defaults to 2.
     *
     * Configurable rather than fixed because an empty state can sit anywhere: a
     * whole blank page wants `h1`, a card inside a section wants `h3`. Hard-coding
     * one level makes the document outline wrong everywhere else, which is its own
     * accessibility defect — a skipped level reads as a missing section.
     */
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}
/**
 * The zero-data state. The title is a real heading and the description a real
 * paragraph, so the reason a region is empty is ANNOUNCED — it appears in the
 * document outline and in a screen reader's heading list, which is how someone
 * navigating by structure finds out a region is empty rather than broken.
 */
export declare function EmptyState({ icon, title, description, action, headingLevel, className, }: EmptyStateProps): import("react").JSX.Element;
