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
