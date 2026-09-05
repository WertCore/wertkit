import { ReactNode } from 'react';
export interface NavListProps {
    children: ReactNode;
    /**
     * Names the list. Omit it when the list already sits inside a labelled
     * landmark — `AppShell` wraps its sidebar slot in `<nav aria-label="Primary">`,
     * and a second name nested inside that one is worse than none.
     */
    'aria-label'?: string;
    className?: string;
}
/**
 * A vertical list of destinations.
 *
 * Renders a plain `<ul>`, deliberately not a `<nav>`: the landmark belongs to
 * whatever region the list sits in, and nesting two of them makes the document
 * outline ambiguous for anyone navigating by landmark.
 *
 * Like `CommandPalette`, this owns presentation and semantics only. Which
 * destinations exist, what they count and where they lead stay in the app.
 */
export declare function NavList({ children, className, ...aria }: NavListProps): import("react").JSX.Element;
export interface NavItemProps {
    children: ReactNode;
    /** The destination currently on screen. Emits `aria-current="page"`. */
    current?: boolean;
    /** Leading adornment. Decorative — the label carries the meaning. */
    icon?: ReactNode;
    /** Trailing annotation: a count, a status dot. */
    badge?: ReactNode;
    onSelect?: () => void;
    /**
     * Supply the element yourself. A destination with a URL should be an `<a>`,
     * not a button that calls a router — only the app knows which it is.
     */
    asChild?: boolean;
    disabled?: boolean;
    className?: string;
}
export declare function NavItem({ children, current, icon, badge, onSelect, asChild, disabled, className, }: NavItemProps): import("react").JSX.Element;
