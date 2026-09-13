import * as RadixContextMenu from '@radix-ui/react-context-menu';
import { forwardRef, type ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './Menu.module.css';

/**
 * A right-click menu.
 *
 * Shares `Menu.module.css` with `Menu`, so the two are the same surface with
 * two triggers rather than two designs. The parts are separate components and
 * not re-exports of `MenuItem`, because Radix's context menu is its own
 * primitive: a `DropdownMenu.Item` inside a `ContextMenu.Content` renders
 * outside its own root and loses keyboard handling entirely.
 *
 * Radix supplies what a hand-rolled version reliably gets wrong: anchoring to
 * the pointer with collision handling, typeahead, and focus return to the
 * trigger.
 *
 * The keyboard path comes free because this listens for the PLATFORM's
 * `contextmenu` event rather than for a right-click: browsers raise the same
 * event for `Shift+F10` and the Menu key, with no pointer coordinates. A
 * hand-rolled `onMouseDown`/`button === 2` check is what makes a context menu
 * mouse-only, and that is the usual mistake.
 *
 * Always an ACCELERATOR. Every item belongs on a visible control too; a menu
 * reachable only by right-click is undiscoverable, and inside a browser it is
 * competing with the one the user already knows.
 */
export interface ContextMenuProps extends RadixContextMenu.ContextMenuProps {
  /** The region that responds to a right-click. */
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

export function ContextMenu({ trigger, children, className, ...rest }: ContextMenuProps) {
  return (
    <RadixContextMenu.Root {...rest}>
      <RadixContextMenu.Trigger asChild>{trigger}</RadixContextMenu.Trigger>
      <RadixContextMenu.Portal>
        <RadixContextMenu.Content
          className={cn(styles.content, className)}
          collisionPadding={8}
        >
          {children}
        </RadixContextMenu.Content>
      </RadixContextMenu.Portal>
    </RadixContextMenu.Root>
  );
}

export interface ContextMenuItemProps extends RadixContextMenu.ContextMenuItemProps {
  tone?: 'default' | 'danger';
  /** Right-aligned hint, e.g. "⌫". Presentational only - bind the key yourself. */
  shortcut?: string;
}

export const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>(
  function ContextMenuItem({ tone = 'default', shortcut, className, children, ...rest }, ref) {
    return (
      <RadixContextMenu.Item
        ref={ref}
        className={cn(styles.item, tone === 'danger' && styles.danger, className)}
        {...rest}
      >
        {children}
        {shortcut && <span className={styles.shortcut}>{shortcut}</span>}
      </RadixContextMenu.Item>
    );
  },
);

export function ContextMenuLabel({ children }: { children: ReactNode }) {
  return <RadixContextMenu.Label className={styles.label}>{children}</RadixContextMenu.Label>;
}
export function ContextMenuSeparator() {
  return <RadixContextMenu.Separator className={styles.separator} />;
}
