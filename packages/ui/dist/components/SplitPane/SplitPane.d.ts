import { ReactNode } from 'react';
export interface SplitPaneProps {
    children: [ReactNode, ReactNode];
    direction?: 'horizontal' | 'vertical';
    /** Size of the FIRST pane, in px. Controlled when paired with onSizeChange. */
    size: number;
    onSizeChange: (size: number) => void;
    min?: number;
    max?: number;
    /** Restored on double-click / Home. */
    defaultSize?: number;
    'aria-label'?: string;
    className?: string;
}
/**
 * Two panes with a draggable divider.
 *
 * The handle is a real focusable separator with aria-valuenow, so the split is
 * adjustable from the keyboard (arrows, Home to reset) - drag-only dividers are
 * the usual accessibility gap in this pattern. Uses pointer capture, so a fast
 * drag that leaves the window still tracks.
 */
export declare function SplitPane({ children, direction, size, onSizeChange, min, max, defaultSize, className, 'aria-label': ariaLabel, }: SplitPaneProps): import("react").JSX.Element;
