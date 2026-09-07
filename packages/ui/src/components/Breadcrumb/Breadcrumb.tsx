import { Fragment, createContext, isValidElement, useContext, useState } from 'react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './Breadcrumb.module.css';

/**
 * Tells an item whether it is the last one, so the trail's tail carries
 * aria-current="page" without every call site having to say which item is
 * the current page (and getting it wrong when the trail is built from a
 * variable-length path).
 */
const ItemContext = createContext<{ isLast: boolean }>({ isLast: false });

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
export function Breadcrumb({
  children,
  separator = '/',
  maxItems,
  'aria-label': ariaLabel = 'Breadcrumb',
  className,
}: BreadcrumbProps) {
  const [expanded, setExpanded] = useState(false);
  // toArray drops nullish children and assigns keys, so a conditionally
  // rendered level does not leave a stray separator behind.
  const items = childrenToArray(children);

  // Collapse needs room for first + ellipsis + at least one tail item; below
  // that the ellipsis costs more than it saves, so show everything.
  const collapsing =
    !expanded && maxItems !== undefined && maxItems >= 3 && items.length > maxItems;
  const tail = collapsing ? items.slice(items.length - (maxItems - 2)) : [];
  const shown = collapsing ? [items[0], ELLIPSIS, ...tail] : items;

  return (
    <nav aria-label={ariaLabel} className={cn(styles.root, className)}>
      <ol className={styles.list}>
        {shown.map((child, i) => {
          const last = i === shown.length - 1;
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: position IS the identity here
            <li key={i} className={styles.item}>
              {i > 0 && (
                <span aria-hidden="true" className={styles.separator}>
                  {separator}
                </span>
              )}
              {child === ELLIPSIS ? (
                <button
                  type="button"
                  className={styles.ellipsis}
                  onClick={() => setExpanded(true)}
                  aria-label="Show the full path"
                >
                  &hellip;
                </button>
              ) : (
                <ItemContext.Provider value={{ isLast: last }}>{child}</ItemContext.Provider>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

const ELLIPSIS = Symbol('breadcrumb-ellipsis') as unknown as ReactNode;

/**
 * Flatten to one entry per breadcrumb level.
 *
 * React.Children.toArray is not enough: it keeps a <>...</> as a SINGLE child,
 * so a trail assembled inside a fragment — which is what building one from a
 * variable path looks like — collapses into one <li> with every level marked
 * aria-current. That renders without error and is wrong in the one way this
 * component exists to get right, so fragments are flattened explicitly.
 */
function childrenToArray(children: ReactNode): ReactNode[] {
  const out: ReactNode[] = [];
  const walk = (node: ReactNode) => {
    if (node === null || node === undefined || node === false || node === true) return;
    if (Array.isArray(node)) {
      for (const n of node) walk(n);
      return;
    }
    if (isValidElement(node) && node.type === Fragment) {
      walk((node.props as { children?: ReactNode }).children);
      return;
    }
    out.push(node);
  };
  walk(children);
  return out;
}

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
export function BreadcrumbItem({ children, current, className, ...rest }: BreadcrumbItemProps) {
  const { isLast } = useContext(ItemContext);
  const isCurrent = current ?? isLast;

  if (isCurrent) {
    return (
      <span aria-current="page" className={cn(styles.current, className)}>
        {children}
      </span>
    );
  }
  return (
    <a className={cn(styles.link, className)} {...rest}>
      {children}
    </a>
  );
}
