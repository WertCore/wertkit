import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Pages serves a project site from /<repo>/, so assets must resolve under
  // that prefix. Overridable for a root-hosted deploy.
  base: process.env.WK_BASE ?? '/wertkit/',
  plugins: [react()],
});
