import * as RadixMenu from '@radix-ui/react-dropdown-menu';
import { forwardRef, type ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './Menu.module.css';

export interface MenuProps extends RadixMenu.DropdownMenuProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

export function Menu({ trigger, children, align = 'start', side = 'bottom', className, ...rest }: MenuProps) {
  return (
    <RadixMenu.Root {...rest}>
      <RadixMenu.Trigger asChild>{trigger}</RadixMenu.Trigger>
      <RadixMenu.Portal>
        <RadixMenu.Content
          className={cn(styles.content, className)}
          align={align}
          side={side}
          sideOffset={4}
          collisionPadding={8}
        >
          {children}
        </RadixMenu.Content>
      </RadixMenu.Portal>
    </RadixMenu.Root>
  );
}

export interface MenuItemProps extends RadixMenu.DropdownMenuItemProps {
  tone?: 'default' | 'danger';
  /** Right-aligned hint, e.g. "⌘K". Presentational only - bind the key yourself. */
  shortcut?: string;
}

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(function MenuItem(
  { tone = 'default', shortcut, className, children, ...rest },
  ref,
) {
  return (
    <RadixMenu.Item
      ref={ref}
      className={cn(styles.item, tone === 'danger' && styles.danger, className)}
      {...rest}
    >
      {children}
      {shortcut && <span className={styles.shortcut}>{shortcut}</span>}
    </RadixMenu.Item>
  );
});

export function MenuLabel({ children }: { children: ReactNode }) {
  return <RadixMenu.Label className={styles.label}>{children}</RadixMenu.Label>;
}
export function MenuSeparator() {
  return <RadixMenu.Separator className={styles.separator} />;
}

export interface MenuSubProps {
  /** The row that opens the submenu on hover or focus — rendered as an item. */
  trigger: ReactNode;
  /** The submenu's own items. */
  children: ReactNode;
  /** The ▸ affordance. On by default; turn OFF for an icon-only (⋯) trigger,
   *  where a second glyph would just read as noise. */
  chevron?: boolean;
  tone?: 'default' | 'danger';
  className?: string;
}

/**
 * A nested menu. Radix's own Sub primitive, so it inherits the parent's
 * keyboard model, typeahead, and pointer-safe diagonal tracking (the reason a
 * hand-rolled flyout closes the instant the cursor cuts a corner). The trigger
 * is a menu item; the content is the same surface as the top-level menu.
 */
export function MenuSub({ trigger, children, chevron = true, tone = 'default', className }: MenuSubProps) {
  return (
    <RadixMenu.Sub>
      <RadixMenu.SubTrigger
        className={cn(styles.item, styles.subTrigger, tone === 'danger' && styles.danger, className)}
      >
        {trigger}
        {chevron && (
          <svg
            className={styles.subChevron}
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        )}
      </RadixMenu.SubTrigger>
      <RadixMenu.Portal>
        <RadixMenu.SubContent
          className={styles.content}
          sideOffset={2}
          alignOffset={-4}
          collisionPadding={8}
        >
          {children}
        </RadixMenu.SubContent>
      </RadixMenu.Portal>
    </RadixMenu.Sub>
  );
}
