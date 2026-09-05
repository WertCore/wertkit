import { useCallback, useRef, useState, type ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './SplitPane.module.css';

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
export function SplitPane({
  children,
  direction = 'horizontal',
  size,
  onSizeChange,
  min = 120,
  max = Number.POSITIVE_INFINITY,
  defaultSize,
  className,
  'aria-label': ariaLabel = 'Resize panes',
}: SplitPaneProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const horizontal = direction === 'horizontal';

  const clamp = useCallback(
    (n: number) => {
      const rect = rootRef.current?.getBoundingClientRect();
      const limit = rect ? (horizontal ? rect.width : rect.height) - min : max;
      return Math.max(min, Math.min(n, Math.min(max, limit)));
    },
    [min, max, horizontal],
  );

  const step = (delta: number) => onSizeChange(clamp(size + delta));

  return (
    <div ref={rootRef} className={cn(styles.root, styles[direction], className)}>
      <div className={styles.pane} style={{ [horizontal ? 'width' : 'height']: size, flex: 'none' }}>
        {children[0]}
      </div>
      <div
        role="separator"
        tabIndex={0}
        aria-label={ariaLabel}
        aria-orientation={horizontal ? 'vertical' : 'horizontal'}
        aria-valuenow={Math.round(size)}
        aria-valuemin={min}
        aria-valuemax={Number.isFinite(max) ? max : undefined}
        data-dragging={dragging || undefined}
        className={styles.handle}
        onDoubleClick={() => defaultSize !== undefined && onSizeChange(defaultSize)}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          setDragging(true);
        }}
        onPointerMove={(e) => {
          if (!dragging) return;
          const rect = rootRef.current?.getBoundingClientRect();
          if (!rect) return;
          onSizeChange(clamp(horizontal ? e.clientX - rect.left : e.clientY - rect.top));
        }}
        onPointerUp={(e) => {
          e.currentTarget.releasePointerCapture(e.pointerId);
          setDragging(false);
        }}
        onKeyDown={(e) => {
          const big = e.shiftKey ? 40 : 10;
          if (e.key === (horizontal ? 'ArrowLeft' : 'ArrowUp')) { e.preventDefault(); step(-big); }
          if (e.key === (horizontal ? 'ArrowRight' : 'ArrowDown')) { e.preventDefault(); step(big); }
          if (e.key === 'Home' && defaultSize !== undefined) { e.preventDefault(); onSizeChange(defaultSize); }
        }}
      />
      <div className={cn(styles.pane)} style={{ flex: 1 }}>
        {children[1]}
      </div>
    </div>
  );
}
