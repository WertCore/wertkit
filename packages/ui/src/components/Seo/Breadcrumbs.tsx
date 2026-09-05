import { Fragment } from 'react';
import { cn } from '../../utils';
import { JsonLd } from './JsonLd';
import styles from './Breadcrumbs.module.css';

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
export function Breadcrumbs({ items, origin, className }: BreadcrumbsProps) {
  const structured = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: origin ? new URL(item.href, origin).toString() : item.href } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className={cn(styles.root, className)}>
        <ol className={styles.list}>
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <Fragment key={`${item.label}-${i}`}>
                <li className={styles.item}>
                  {item.href && !isLast ? (
                    <a className={styles.link} href={item.href}>
                      {item.label}
                    </a>
                  ) : (
                    <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
                  )}
                </li>
                {!isLast && (
                  <li className={styles.sep} aria-hidden="true">
                    /
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={structured} />
    </>
  );
}
