import * as RadixDialog from '@radix-ui/react-dialog';
import type { CSSProperties, ReactNode } from 'react';
import { cn } from '../../utils';
import { CloseIcon } from '../../icons';
import { VisuallyHidden } from '../Semantic/VisuallyHidden';
import styles from './Dialog.module.css';

export interface DialogProps extends RadixDialog.DialogProps {
  /** Required: every dialog needs an accessible name. Use titleHidden to hide it visually. */
  title: ReactNode;
  titleHidden?: boolean;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  trigger?: ReactNode;
  width?: string;
  showClose?: boolean;
  className?: string;
}

/**
 * Focus trap, scroll lock, Escape handling and ARIA wiring come from Radix.
 * Rendered in a portal, so opening it cannot shift the page underneath.
 */
export function Dialog({
  title,
  titleHidden = false,
  description,
  children,
  footer,
  trigger,
  width,
  showClose = true,
  className,
  ...rest
}: DialogProps) {
  return (
    <RadixDialog.Root {...rest}>
      {trigger && <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>}
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.overlay} />
        <RadixDialog.Content
          className={cn(styles.content, className)}
          style={width ? ({ '--wk-dialog-w': width } as CSSProperties) : undefined}
        >
          <div className={styles.header}>
            <div className={styles.headings}>
              {titleHidden ? (
                <RadixDialog.Title asChild>
                  <VisuallyHidden>{title}</VisuallyHidden>
                </RadixDialog.Title>
              ) : (
                <RadixDialog.Title className={styles.title}>{title}</RadixDialog.Title>
              )}
              {description && (
                <RadixDialog.Description className={styles.description}>
                  {description}
                </RadixDialog.Description>
              )}
            </div>
            {showClose && (
              <RadixDialog.Close className={styles.close} aria-label="Close">
                <CloseIcon />
              </RadixDialog.Close>
            )}
          </div>
          {children}
          {footer && <div className={styles.footer}>{footer}</div>}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}

export const DialogClose = RadixDialog.Close;
