import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mlread.me',
  adapter: vercel(),
  output: 'static',
  server: { port: 3000, host: true },
  integrations: [
    mdx(),
    sitemap(),
    tailwind()
  ]
});
