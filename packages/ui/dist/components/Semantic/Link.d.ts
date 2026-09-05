import { AnchorHTMLAttributes } from 'react';
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Opens in a new tab and applies rel="noopener noreferrer". */
    external?: boolean;
    /**
     * Tells crawlers not to pass ranking credit. Use for user-submitted or paid
     * links; leaving it off by default is what you want for internal linking.
     */
    nofollow?: boolean;
    /** Render a router Link while keeping wertkit styling. */
    asChild?: boolean;
}
export declare const Link: import('react').ForwardRefExoticComponent<LinkProps & import('react').RefAttributes<HTMLAnchorElement>>;
