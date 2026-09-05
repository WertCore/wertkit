import type {
  HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes,
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
}

export function Table({ caption, captionHidden, interactive, className, children, ...rest }: TableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={cn(styles.root, interactive && styles.interactive, className)} {...rest}>
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
