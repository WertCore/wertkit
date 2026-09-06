import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Copy the tokens stylesheet INTO this package's dist.
 *
 * `exports["./tokens.css"]` used to point at `../tokens/dist/tokens.css` —
 * outside the package root. That resolves in a workspace and is dead the
 * moment the package is packed: npm cannot include a file above the root, so
 * every consumer importing `@wertkit/ui/tokens.css` would get a resolution
 * error from the published artifact while the monorepo looked fine.
 *
 * The copy keeps the specifier consumers already use, rather than making them
 * learn a second one (`@wertkit/tokens/css`) that only applies off-workspace.
 */
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, '..', '..', 'tokens', 'dist', 'tokens.css');
const destDir = join(here, '..', 'dist');
const dest = join(destDir, 'tokens.css');

if (!existsSync(src)) {
  console.error(`copy-tokens: ${src} is missing — build @wertkit/tokens first.`);
  process.exit(1);
}
mkdirSync(destDir, { recursive: true });
copyFileSync(src, dest);
console.log('copy-tokens: dist/tokens.css written');
