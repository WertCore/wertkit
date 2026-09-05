import { forwardRef, type CSSProperties, type ImgHTMLAttributes } from 'react';
import { cn } from '../../utils';
import styles from './Media.module.css';

type BaseImgProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'width' | 'height' | 'loading' | 'decoding'
>;

/**
 * Dimensions are required in one form or the other. An <img> without reserved
 * space is the most common source of layout shift, and CLS is a ranking signal,
 * so the type system refuses the unsafe case rather than warning about it.
 */
type Dimensions =
  | { width: number; height: number; aspectRatio?: never }
  | { aspectRatio: number | `${number}/${number}`; width?: number; height?: number };

export type ImageProps = BaseImgProps &
  Dimensions & {
    alt: string;
    /**
     * Marks this as the Largest Contentful Paint element: eager-loads it and
     * raises its fetch priority. Use on at most one image per view - marking
     * everything priority is the same as marking nothing.
     */
    priority?: boolean;
  };

export const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(
  { width, height, aspectRatio, priority = false, className, style, alt, ...rest },
  ref,
) {
  const ar = aspectRatio ?? (width && height ? `${width}/${height}` : undefined);
  return (
    <img
      ref={ref}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
      className={cn(styles.image, className)}
      style={{ ...(ar ? { '--wk-image-ar': String(ar) } : null), ...style } as CSSProperties}
      {...rest}
    />
  );
});
