// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import tailwindConfig from './tailwind.config.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [],

  vite: {
    plugins: [tailwindcss({ config: tailwindConfig })]
  }
});