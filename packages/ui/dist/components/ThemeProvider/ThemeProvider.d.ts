import { ReactNode } from 'react';
/**
 * Built-in theme names. Apps may pass any string - a consuming app is expected
 * to define its own themes by overriding the --wk-* role variables under a
 * matching [data-theme="..."] selector in its own stylesheet.
 */
export type BuiltInTheme = 'light' | 'dark' | 'sepia' | 'night';
export type ThemeName = BuiltInTheme | (string & {});
export type Density = 'normal' | 'compact';
/** 'system' follows prefers-color-scheme and resolves to light or dark. */
export type ThemeSetting = ThemeName | 'system';
interface ThemeContextValue {
    theme: ThemeSetting;
    /** The theme actually applied - never 'system'. */
    resolvedTheme: ThemeName;
    setTheme: (theme: ThemeSetting) => void;
    density: Density;
    setDensity: (density: Density) => void;
}
export interface ThemeProviderProps {
    children: ReactNode;
    /** Controlled theme. Omit to let the provider manage it internally. */
    theme?: ThemeSetting;
    defaultTheme?: ThemeSetting;
    defaultDensity?: Density;
    /** Persist across reloads. Pass null to disable persistence. */
    storageKey?: string | null;
    /**
     * Where the data-theme/data-density attributes land. 'root' targets
     * <html> (normal apps); 'self' scopes them to a wrapper div, which is what
     * you want inside a browser extension injected into a host page.
     */
    target?: 'root' | 'self';
}
export declare function ThemeProvider({ children, theme: controlledTheme, defaultTheme, defaultDensity, storageKey, target, }: ThemeProviderProps): import("react").JSX.Element;
export declare function useTheme(): ThemeContextValue;
export {};
