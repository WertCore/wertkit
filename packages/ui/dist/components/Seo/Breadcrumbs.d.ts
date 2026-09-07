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
 *
 * For public web pages. In-app hierarchy navigation wants `Breadcrumb` /
 * `BreadcrumbItem`, which takes click handlers and collapses deep paths, and
 * emits no structured data.
 */
export declare function Breadcrumbs({ items, origin, className }: BreadcrumbsProps): import("react").JSX.Element;
