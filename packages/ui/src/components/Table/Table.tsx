import type {
  CSSProperties, HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes,
} from 'react';
import { cn } from '../../utils';
import styles from './Table.module.css';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  /**
   * Describes the table. Rendered as a real <caption> - visible to readers and
   * indexed, unlike a heading placed above the table with no association.
   */
  caption?: ReactNode;
  captionHidden?: boolean;
  /** Adds row hover affordance. Purely visual. */
  interactive?: boolean;
  /**
   * Pins the header row while the body scrolls. Needs something to scroll
   * against - either `maxBlockSize` or a height-constrained parent.
   */
  stickyHeader?: boolean;
  /**
   * Caps the scroll container, e.g. `'100%'` or `'40rem'`. Any CSS length.
   * Setting it turns the wrapper into a vertical scroll container; without it
   * the wrapper only scrolls horizontally, as before.
   */
  maxBlockSize?: string;
}

export function Table({
  caption, captionHidden, interactive, stickyHeader, maxBlockSize,
  className, children, ...rest
}: TableProps) {
  const scrolls = maxBlockSize !== undefined;
  return (
    <div
      className={cn(styles.wrapper, scrolls && styles.scroll)}
      style={scrolls ? ({ '--wk-table-max-block': maxBlockSize } as CSSProperties) : undefined}
    >
      <table
        className={cn(
          styles.root,
          interactive && styles.interactive,
          stickyHeader && styles.sticky,
          className,
        )}
        {...rest}
      >
        {caption && (
          <caption className={cn(styles.caption, captionHidden && styles.captionHidden)}>
            {caption}
          </caption>
        )}
        {children}
      </table>
    </div>
  );
}

export const Thead = (p: HTMLAttributes<HTMLTableSectionElement>) => <thead {...p} />;
export const Tbody = (p: HTMLAttributes<HTMLTableSectionElement>) => <tbody {...p} />;

export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean;
}
export const Tr = ({ selected, className, ...rest }: TrProps) => (
  <tr data-selected={selected || undefined} className={cn(styles.row, className)} {...rest} />
);

export interface ThProps extends ThHTMLAttributes<HTMLTableCellElement> {
  numeric?: boolean;
}
/** scope defaults to "col" - the association screen readers and parsers rely on. */
export const Th = ({ numeric, scope = 'col', className, ...rest }: ThProps) => (
  <th scope={scope} className={cn(styles.th, numeric && styles.numeric, className)} {...rest} />
);

export interface TdProps extends TdHTMLAttributes<HTMLTableCellElement> {
  numeric?: boolean;
}
export const Td = ({ numeric, className, ...rest }: TdProps) => (
  <td className={cn(styles.td, numeric && styles.numeric, className)} {...rest} />
);
