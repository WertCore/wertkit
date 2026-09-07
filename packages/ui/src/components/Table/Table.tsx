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
  /**
   * Makes the header a sort control: the label becomes a button and the cell
   * carries aria-sort, which is how a screen reader learns the table is sorted
   * and by which column. A clickable <th> with neither is a control only a
   * mouse user can find.
   */
  sortable?: boolean;
  /** This column's current sort, or null when the table is sorted by another. */
  sortDirection?: 'asc' | 'desc' | null;
  /**
   * Called with the direction the column should take next — ascending unless
   * it is already ascending. Every table would otherwise write the same flip.
   */
  onSort?: (next: 'asc' | 'desc') => void;
}
/** scope defaults to "col" - the association screen readers and parsers rely on. */
export const Th = ({
  numeric, sortable, sortDirection, onSort, scope = 'col', className, children, ...rest
}: ThProps) => {
  if (!sortable) {
    return (
      <th scope={scope} className={cn(styles.th, numeric && styles.numeric, className)} {...rest}>
        {children}
      </th>
    );
  }
  const dir = sortDirection ?? null;
  return (
    <th
      scope={scope}
      // "none" rather than omitted: an unsorted sortable column still needs to
      // announce that it CAN sort.
      aria-sort={dir === 'asc' ? 'ascending' : dir === 'desc' ? 'descending' : 'none'}
      className={cn(styles.th, numeric && styles.numeric, className)}
      {...rest}
    >
      <button
        type="button"
        className={styles.sortButton}
        onClick={() => onSort?.(dir === 'asc' ? 'desc' : 'asc')}
      >
        {children}
        {/* Decorative: aria-sort already carries the state, so announcing the
            glyph too would say it twice. */}
        <span aria-hidden="true" className={styles.sortIndicator} data-direction={dir ?? 'none'}>
          {dir === 'asc' ? '\u25b2' : dir === 'desc' ? '\u25bc' : '\u2195'}
        </span>
      </button>
    </th>
  );
};

export interface TdProps extends TdHTMLAttributes<HTMLTableCellElement> {
  numeric?: boolean;
}
export const Td = ({ numeric, className, ...rest }: TdProps) => (
  <td className={cn(styles.td, numeric && styles.numeric, className)} {...rest} />
);
