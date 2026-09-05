import * as RadixTooltip from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './Tooltip.module.css';

/** Wrap the app once so tooltips share open/close timing. */
export const TooltipProvider = RadixTooltip.Provider;

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  delayDuration?: number;
  className?: string;
}

/**
 * Supplementary information only. A tooltip is not reachable on touch and is
 * skipped by some assistive tech, so never put the only copy of something
 * important in one - label icon-only buttons with aria-label as well.
 */
export function Tooltip({ content, children, side = 'top', delayDuration, className }: TooltipProps) {
  return (
    <RadixTooltip.Root delayDuration={delayDuration}>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          className={cn(styles.content, className)}
          side={side}
          sideOffset={6}
          collisionPadding={8}
        >
          {content}
          <RadixTooltip.Arrow className={styles.arrow} width={10} height={5} />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
}
