export interface Crumb {
    label: string;
    /** Omit on the current page - the last crumb should not be a link. */
    href?: string;
}
export interface BreadcrumbsProps {
    items: Crumb[];
    /** Absolute site origin. Required for valid BreadcrumbList output. */
    origin?: string;
    className?: string;
}
/**
 * Renders a breadcrumb trail and the matching BreadcrumbList structured data,
 * so the two can never drift apart - the usual failure mode when JSON-LD is
 * hand-maintained beside the markup.
 */
export declare function Breadcrumbs({ items, origin, className }: BreadcrumbsProps): import("react").JSX.Element;
