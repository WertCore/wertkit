import { Slot } from '@radix-ui/react-slot';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Renders a square button. Requires aria-label. */
  iconOnly?: boolean;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  /**
   * Render as the single child element instead of <button>, keeping this
   * component's styling. Use for links: <Button asChild><a href=".." /></Button>
   */
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'secondary',
    size = 'md',
    iconOnly = false,
    loading = false,
    startIcon,
    endIcon,
    asChild = false,
    className,
    children,
    disabled,
    type,
    ...rest
  },
  ref,
) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      ref={ref}
      // asChild forwards to an arbitrary element, which may not accept `type`.
      type={asChild ? undefined : (type ?? 'button')}
      disabled={disabled || loading}
      data-loading={loading || undefined}
      className={cn(
        styles.root,
        styles[variant],
        styles[size],
        iconOnly && styles.iconOnly,
        className,
      )}
      {...rest}
    >
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : startIcon}
      {children}
      {!loading && endIcon}
    </Comp>
  );
});
