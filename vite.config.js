import { defineConfig } from 'vite';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  base: './', // Use relative paths for GitHub Pages subdirectory
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      }
    }
  },
  server: {
    port: 8080,
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  plugins: [
    {
      name: 'github-pages-setup',
      closeBundle() {
        // Create .nojekyll file for GitHub Pages
        writeFileSync(resolve(__dirname, 'docs/.nojekyll'), '');
        console.log('✓ Created .nojekyll for GitHub Pages');
      }
    }
  ]
});
