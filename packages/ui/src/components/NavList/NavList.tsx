import type { ReactNode } from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cn } from '../../utils';
import styles from './NavList.module.css';

export interface NavListProps {
  children: ReactNode;
  /**
   * Names the list. Omit it when the list already sits inside a labelled
   * landmark — `AppShell` wraps its sidebar slot in `<nav aria-label="Primary">`,
   * and a second name nested inside that one is worse than none.
   */
  'aria-label'?: string;
  className?: string;
}

/**
 * A vertical list of destinations.
 *
 * Renders a plain `<ul>`, deliberately not a `<nav>`: the landmark belongs to
 * whatever region the list sits in, and nesting two of them makes the document
 * outline ambiguous for anyone navigating by landmark.
 *
 * Like `CommandPalette`, this owns presentation and semantics only. Which
 * destinations exist, what they count and where they lead stay in the app.
 */
export function NavList({ children, className, ...aria }: NavListProps) {
  return (
    <ul className={cn(styles.list, className)} {...aria}>
      {children}
    </ul>
  );
}

export interface NavItemProps {
  children: ReactNode;
  /** The destination currently on screen. Emits `aria-current="page"`. */
  current?: boolean;
  /** Leading adornment. Decorative — the label carries the meaning. */
  icon?: ReactNode;
  /** Trailing annotation: a count, a status dot. */
  badge?: ReactNode;
  onSelect?: () => void;
  /**
   * Supply the element yourself. A destination with a URL should be an `<a>`,
   * not a button that calls a router — only the app knows which it is.
   */
  asChild?: boolean;
  disabled?: boolean;
  className?: string;
}

export function NavItem({
  children,
  current = false,
  icon,
  badge,
  onSelect,
  asChild = false,
  disabled = false,
  className,
}: NavItemProps) {
  const Control = asChild ? Slot : 'button';

  return (
    <li className={styles.item}>
      <Control
        {...(asChild ? {} : { type: 'button' as const, disabled })}
        className={cn(styles.control, className)}
        // The state is announced rather than left to colour alone.
        aria-current={current ? 'page' : undefined}
        data-current={current || undefined}
        onClick={onSelect}
      >
        {icon && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )}
        {/*
          Same `Slottable` rule as Button: Slot counts `undefined`/`false`
          children, so the optional icon and badge around this made
          `<NavItem asChild>` throw regardless of whether either was passed.
          When slotting, the consumer's own element becomes the control and
          carries the icon and badge as its children — so the label wrapper
          would have nested their anchor inside a span rather than replacing
          the button, which is the thing asChild exists to do.
        */}
        {asChild ? (
          <Slottable>{children}</Slottable>
        ) : (
          <span className={styles.label}>{children}</span>
        )}
        {badge && <span className={styles.badge}>{badge}</span>}
      </Control>
    </li>
  );
}
