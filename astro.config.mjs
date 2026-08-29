// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kirito.blog',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // Lightning CSS drops the unprefixed backdrop-filter: vitejs/vite#22649.
    build: { cssMinify: 'esbuild' },
  },
});
