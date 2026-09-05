/**
 * Blocking inline script that applies the persisted theme before first paint.
 *
 * Without this, a server-rendered page paints the default theme and then flips
 * once React hydrates - a visible flash, and a layout-stability risk. Render it
 * inside <head>, above any stylesheet.
 *
 *   <head><ThemeScript /><link rel="stylesheet" href="..." /></head>
 *
 * Add suppressHydrationWarning to <html>, since this script intentionally
 * mutates attributes the server did not emit.
 */
export interface ThemeScriptProps {
    storageKey?: string | null;
    defaultTheme?: string;
    defaultDensity?: string;
    nonce?: string;
}
export declare function ThemeScript({ storageKey, defaultTheme, defaultDensity, nonce, }: ThemeScriptProps): import("react").JSX.Element;
