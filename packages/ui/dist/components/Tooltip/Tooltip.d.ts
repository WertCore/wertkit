import { ReactNode } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
/** Wrap the app once so tooltips share open/close timing. */
export declare const TooltipProvider: import('react').FC<RadixTooltip.TooltipProviderProps>;
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
export declare function Tooltip({ content, children, side, delayDuration, className }: TooltipProps): import("react").JSX.Element;
