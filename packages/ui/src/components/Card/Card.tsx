import { useId, type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils';
import styles from './Card.module.css';

export type CardVariant = 'outlined' | 'raised' | 'inset';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

interface CardOwnProps {
  /** Optional heading. Rendered as a real <h3> and wired up with aria-labelledby. */
  title?: ReactNode;
  description?: ReactNode;
  /** Leading adornment, usually an icon. Decorative. */
  icon?: ReactNode;
  /** Top-right slot — a Badge, a menu, a switch. */
  action?: ReactNode;
  /** Separated bottom region, for actions or metadata. */
  footer?: ReactNode;
  children?: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  /**
   * Makes the whole card one control.
   *
   * Renders a real `<button>` rather than a div with a click handler, so it is
   * focusable, keyboard-operable and announced as a control. Use `asChild`
   * instead when the destination is a link — a card that navigates should be an
   * `<a>`, not a button.
   */
  interactive?: boolean;
  /** Render as the single child element instead, keeping the card's styling. */
  asChild?: boolean;
  className?: string;
}

export type CardProps = CardOwnProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CardOwnProps> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'type'>;

/**
 * A bordered surface for a self-contained block of content.
 *
 * The gap this fills: `FormSection` groups and spaces content but draws nothing,
 * so anything that needed a visible container had to hand-roll one — which is
 * how apps drift apart visually.
 */
export function Card({
  title,
  description,
  icon,
  action,
  footer,
  children,
  variant = 'outlined',
  padding = 'md',
  interactive = false,
  asChild = false,
  className,
  ...rest
}: CardProps) {
  // Called unconditionally: hooks cannot live inside a ternary.
  const generatedId = useId();
  const headingId = title ? generatedId : undefined;

  const body = (
    <>
      {(title || action || icon) && (
        <div className={styles.top}>
          {icon && (
            <span className={styles.icon} aria-hidden="true">
              {icon}
            </span>
          )}
          <div className={styles.head}>
            {title && (
              <h3 className={styles.title} id={headingId}>
                {title}
              </h3>
            )}
            {description && <p className={styles.description}>{description}</p>}
          </div>
          {action && <div className={styles.action}>{action}</div>}
        </div>
      )}
      {children && <div className={styles.body}>{children}</div>}
      {footer && <div className={styles.footer}>{footer}</div>}
    </>
  );

  const classes = cn(
    styles.root,
    styles[variant],
    styles[`padding-${padding}`],
    interactive && styles.interactive,
    className,
  );

  if (asChild) {
    return (
      <Slot className={classes} aria-labelledby={headingId} {...rest}>
        <div>{body}</div>
      </Slot>
    );
  }

  if (interactive) {
    return (
      <button
        type="button"
        className={classes}
        aria-labelledby={headingId}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {body}
      </button>
    );
  }

  return (
    <div className={classes} aria-labelledby={headingId} {...rest}>
      {body}
    </div>
  );
}
