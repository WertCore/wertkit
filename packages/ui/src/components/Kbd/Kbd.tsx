import { Fragment, type HTMLAttributes } from 'react';
import { cn } from '../../utils';
import styles from './Kbd.module.css';

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  /** Split a chord into one key cap per token: keys={['⌘','K']}. */
  keys?: string[];
}

/** Renders a real <kbd>, which is what assistive tech expects for shortcuts. */
export function Kbd({ keys, className, children, ...rest }: KbdProps) {
  if (keys?.length) {
    return (
      <span className={styles.group} {...rest}>
        {keys.map((k, i) => (
          <Fragment key={`${k}-${i}`}>
            <kbd className={cn(styles.root, className)}>{k}</kbd>
          </Fragment>
        ))}
      </span>
    );
  }
  return <kbd className={cn(styles.root, className)} {...rest}>{children}</kbd>;
}
