// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User GitHub Pages site -> served at the root domain.
// If you ever rename the repo to something other than
// "InsanePrototyper.github.io", set `base: '/repo-name'` below.
export default defineConfig({
  site: 'https://insaneprototyper.github.io',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
