import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // Enable strict mode for accessibility
  vite: {
    ssr: {
      external: []
    }
  },

  output: "hybrid",
  adapter: cloudflare()
});