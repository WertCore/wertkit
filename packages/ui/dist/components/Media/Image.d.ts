import { ImgHTMLAttributes } from 'react';
type BaseImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height' | 'loading' | 'decoding'>;
/**
 * Dimensions are required in one form or the other. An <img> without reserved
 * space is the most common source of layout shift, and CLS is a ranking signal,
 * so the type system refuses the unsafe case rather than warning about it.
 */
type Dimensions = {
    width: number;
    height: number;
    aspectRatio?: never;
} | {
    aspectRatio: number | `${number}/${number}`;
    width?: number;
    height?: number;
};
export type ImageProps = BaseImgProps & Dimensions & {
    alt: string;
    /**
     * Marks this as the Largest Contentful Paint element: eager-loads it and
     * raises its fetch priority. Use on at most one image per view - marking
     * everything priority is the same as marking nothing.
     */
    priority?: boolean;
};
export declare const Image: import('react').ForwardRefExoticComponent<ImageProps & import('react').RefAttributes<HTMLImageElement>>;
export {};
