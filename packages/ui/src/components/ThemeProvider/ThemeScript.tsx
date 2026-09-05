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

export function ThemeScript({
  storageKey = 'wertkit-theme',
  defaultTheme = 'system',
  defaultDensity = 'normal',
  nonce,
}: ThemeScriptProps) {
  const src = `(function(){try{
var k=${JSON.stringify(storageKey)},t=${JSON.stringify(defaultTheme)},d=${JSON.stringify(defaultDensity)};
if(k){var s=JSON.parse(localStorage.getItem(k)||'{}');if(s.theme)t=s.theme;if(s.density)d=s.density;}
if(t==='system'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
var e=document.documentElement;e.setAttribute('data-theme',t);e.setAttribute('data-density',d);
}catch(_){}})();`;
  return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: src }} />;
}
