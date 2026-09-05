import { HTMLAttributes } from 'react';
export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
    /** Any CSS length. Required so the placeholder reserves the real box. */
    width?: string | number;
    height?: string | number;
    radius?: 'sm' | 'md' | 'lg' | 'full';
}
/**
 * Loading placeholder that occupies the same space as the content replacing it.
 * aria-hidden with aria-busy on the region is the right pairing - a skeleton
 * should not be announced as content.
 */
export declare function Skeleton({ width, height, radius, className, style, ...rest }: SkeletonProps): import("react").JSX.Element;
