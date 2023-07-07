import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({
      manifest: {
        manifest_version: 3,
        name: 'Notion Page Clipper With Tag',
        version: '1.0.0',
        action: {
          default_popup: 'index.html',
        },
      },
    }),
  ],
});
