import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { basename, resolve } from 'node:path';

export default defineConfig({
  plugins: [react(), dts({ include: ['src'], rollupTypes: false })],
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
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    sourcemap: true,
  },
});
