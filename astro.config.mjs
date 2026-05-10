import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable strict mode for accessibility
  vite: {
    ssr: {
      external: []
    }
  }
});
