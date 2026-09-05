import { Slot } from '@radix-ui/react-slot';
import { forwardRef, type AnchorHTMLAttributes } from 'react';
import { cn } from '../../utils';
import styles from './Semantic.module.css';

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

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { external = false, nofollow = false, asChild = false, className, rel, target, ...rest },
  ref,
) {
  const Comp = asChild ? Slot : 'a';
  const relTokens = new Set((rel ?? '').split(/\s+/).filter(Boolean));
  if (external) {
    // noopener closes the window.opener capability leak; noreferrer follows it
    // for older engines that ignore noopener.
    relTokens.add('noopener');
    relTokens.add('noreferrer');
  }
  if (nofollow) relTokens.add('nofollow');

  return (
    <Comp
      ref={ref}
      className={cn(styles.link, className)}
      target={target ?? (external ? '_blank' : undefined)}
      rel={relTokens.size ? [...relTokens].join(' ') : undefined}
      {...rest}
    />
  );
});
