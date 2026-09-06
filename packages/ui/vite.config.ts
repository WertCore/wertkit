import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { basename, resolve } from 'node:path';

export default defineConfig({
  plugins: [react(), dts({
      include: ['src'],
      // Tests are source, not surface. Without this the dts plugin emits
      // `dist/**/​*.test.d.ts` and `dist/test-setup.d.ts` into the published
      // package — declarations for files that import vitest, which a consumer
      // does not have.
      exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx', 'src/test-setup.ts'],
      rollupTypes: false,
    })],
  css: {
    modules: {
      // Stable, readable class names. Matters for a design system: consumers
      // debugging in devtools should see `wk-Button_root`, not a hash.
      generateScopedName: (name: string, filename: string) => {
        const file = basename(filename).replace(/\.module\.css$/, '');
        return `wk-${file}_${name}`;
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    cssFileName: 'wertkit-ui',
    rollupOptions: {
      // Radix stays EXTERNAL. Inlining it shipped a second copy of every
      // primitive: one inside this bundle, one in the consumer's node_modules
      // (they are declared dependencies because the public .d.ts files import
      // Radix types). Two copies on disk is only wasteful; two *executing*
      // copies in an app that also uses Radix is a correctness bug, because
      // Radix coordinates open/focus state through React context and context
      // identity is per-copy. Prefix-matched so deep imports are caught too.
      external: (id: string) =>
        id === 'react' ||
        id === 'react-dom' ||
        id === 'react/jsx-runtime' ||
        id.startsWith('@radix-ui/'),
    },
    sourcemap: true,
  },
});
