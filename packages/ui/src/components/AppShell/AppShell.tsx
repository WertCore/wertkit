import type { CSSProperties, ReactNode } from 'react';
import { cn } from '../../utils';
import styles from './AppShell.module.css';

export interface AppShellProps {
  /**
   * Custom window chrome. In a Tauri window with decorations disabled, set
   * draggable so the region gets data-tauri-drag-region.
   */
  titlebar?: ReactNode;
  draggable?: boolean;
  /** Reserve space for macOS traffic lights under an overlay titlebar. */
  insetWindowControls?: boolean;
  sidebar?: ReactNode;
  sidebarWidth?: string;
  children: ReactNode;
  /** id on <main>, so SkipToContent has a target. */
  mainId?: string;
  className?: string;
}

/**
 * Page frame for desktop (Tauri) and PWA targets. Handles safe-area insets,
 * dynamic viewport height, and optional custom window chrome.
 *
 * <main> is a landmark, so the primary content region is reachable by
 * skip-link and identifiable to crawlers.
 */
export function AppShell({
  titlebar,
  draggable = false,
  insetWindowControls = false,
  sidebar,
  sidebarWidth,
  children,
  mainId = 'wk-main',
  className,
}: AppShellProps) {
  return (
    <div
      className={cn(styles.root, className)}
      style={sidebarWidth ? ({ '--wk-sidebar-w': sidebarWidth } as CSSProperties) : undefined}
    >
      {titlebar && (
        <header
          className={styles.titlebar}
          data-inset-controls={insetWindowControls || undefined}
          {...(draggable ? { 'data-tauri-drag-region': '' } : {})}
        >
          {titlebar}
        </header>
      )}
      <div className={styles.body}>
        {sidebar && (
          <nav className={styles.sidebar} aria-label="Primary">
            {sidebar}
          </nav>
        )}
        <main id={mainId} className={styles.main} tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  );
}
