import { ReactNode } from 'react';
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
export declare function AppShell({ titlebar, draggable, insetWindowControls, sidebar, sidebarWidth, children, mainId, className, }: AppShellProps): import("react").JSX.Element;
