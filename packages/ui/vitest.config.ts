import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/test-setup.ts'],
    css: true,
    // React must be a single instance. Two copies give two dispatchers and
    // every hook throws "invalid hook call" — the failure looks like a bug in
    // the component under test rather than in the resolution.
    server: { deps: { inline: [/@radix-ui\//] } },
  },
  resolve: { dedupe: ['react', 'react-dom'] },
});
