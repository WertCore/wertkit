import { Slot, Slottable } from '@radix-ui/react-slot';
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
      {/*
        `Slottable` marks WHICH child the slot merges onto. Without it, Slot
        requires `React.Children.count(children) === 1` — and that counts the
        `undefined` from an absent `startIcon` and the `false` from
        `{!loading && endIcon}` just as readily as a real element. So this
        always presented three children and `<Button asChild>` threw "failed to
        slot onto its children" even with no icons at all.

        It went unnoticed while the package bundled its own Radix: older Slot
        used `Children.toArray`, which drops null/undefined/false. Externalising
        Radix in 0.1.1 moved consumers onto their own, stricter copy and turned
        a latent bug into a blank screen.

        Only wrapped when slotting: for a real `<button>` this keeps the
        rendered tree byte-identical rather than adding a component to it.
      */}
      {asChild ? <Slottable>{children}</Slottable> : children}
      {!loading && endIcon}
    </Comp>
  );
});
