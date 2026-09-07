import { AnchorHTMLAttributes, ReactNode } from 'react';
export interface BreadcrumbProps {
    /** One BreadcrumbItem per level, outermost first. */
    children: ReactNode;
    /**
     * Rendered between items. Decorative — hidden from assistive tech, which
     * gets the structure from the list instead.
     */
    separator?: ReactNode;
    /**
     * Collapse to first + ellipsis + tail once the trail is longer than this.
     * The ellipsis is a button that expands the full trail, so a deep path stays
     * reachable rather than merely elided. Omit for no collapsing.
     */
    maxItems?: number;
    'aria-label'?: string;
    className?: string;
}
/**
 * A trail of ancestors, as a real nav + ordered list: the order is the
 * hierarchy, so assistive tech gets position and length announced instead of
 * inferring both from separator glyphs.
 *
 * For in-app navigation of a hierarchy. For a page trail on the public web,
 * use `Breadcrumbs` instead — it emits the matching BreadcrumbList JSON-LD,
 * which is what search engines read and what this component deliberately
 * does not carry.
 */
export declare function Breadcrumb({ children, separator, maxItems, 'aria-label': ariaLabel, className, }: BreadcrumbProps): import("react").JSX.Element;
export interface BreadcrumbItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    /**
     * Marks this item as the page you are on: rendered as plain text with
     * aria-current, never a link, because linking to where you already are is
     * a dead control. Defaults to true for the last item.
     */
    current?: boolean;
    className?: string;
}
/**
 * One level of the trail. Renders an anchor when it is navigable and plain
 * text when it is the current page — pass `onClick` with `href="#"` for
 * in-app navigation, or `href` for a real link.
 */
export declare function BreadcrumbItem({ children, current, className, ...rest }: BreadcrumbItemProps): import("react").JSX.Element;
