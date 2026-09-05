import {
  createContext, useCallback, useContext, useEffect, useMemo, useState,
  type ReactNode,
} from 'react';

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

const ThemeContext = createContext<ThemeContextValue | null>(null);

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

function readStored(key: string | null): { theme?: ThemeSetting; density?: Density } {
  // Guarded for SSR: on the server there is no localStorage, and reading it
  // during render would desync the first client paint from the server HTML.
  if (!key || typeof window === 'undefined') return {};
  try {
    return JSON.parse(window.localStorage.getItem(key) ?? '{}');
  } catch {
    return {};
  }
}

export function ThemeProvider({
  children,
  theme: controlledTheme,
  defaultTheme = 'system',
  defaultDensity = 'normal',
  storageKey = 'wertkit-theme',
  target = 'root',
}: ThemeProviderProps) {
  // Server and first client render MUST agree, so state starts from the props
  // only. Persisted values are adopted in an effect, after hydration.
  const [uncontrolledTheme, setUncontrolledTheme] = useState<ThemeSetting>(defaultTheme);
  const [density, setDensityState] = useState<Density>(defaultDensity);
  const [systemDark, setSystemDark] = useState(false);
  const [scopeEl, setScopeEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const stored = readStored(storageKey);
    if (stored.theme) setUncontrolledTheme(stored.theme);
    if (stored.density) setDensityState(stored.density);
    // Runs once on mount; ThemeScript has already painted the right theme so
    // this adoption is invisible.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  const theme = controlledTheme ?? uncontrolledTheme;

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () => setSystemDark(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const resolvedTheme: ThemeName = theme === 'system' ? (systemDark ? 'dark' : 'light') : theme;

  useEffect(() => {
    const el = target === 'self' ? scopeEl : document.documentElement;
    if (!el) return;
    el.setAttribute('data-theme', resolvedTheme);
    el.setAttribute('data-density', density);
  }, [resolvedTheme, density, target, scopeEl]);

  useEffect(() => {
    if (!storageKey || typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify({ theme, density }));
    } catch {
      /* private mode / quota - persistence is best-effort */
    }
  }, [theme, density, storageKey]);

  const setTheme = useCallback((next: ThemeSetting) => setUncontrolledTheme(next), []);
  const setDensity = useCallback((next: Density) => setDensityState(next), []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme, density, setDensity }),
    [theme, resolvedTheme, setTheme, density, setDensity],
  );

  return (
    <ThemeContext.Provider value={value}>
      {target === 'self' ? <div ref={setScopeEl}>{children}</div> : children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
