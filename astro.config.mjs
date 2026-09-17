// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // FIX: Added the site URL so sitemaps and canonical tags generate correctly
  site: 'https://nwd-marketing-site.pages.dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});