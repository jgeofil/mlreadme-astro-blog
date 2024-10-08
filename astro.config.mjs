import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pageInsight from "astro-page-insight";
import spotlightjs from "@spotlightjs/astro";
import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mlread.me',
  adapter: vercel(),
  output: 'hybrid',
  server: { port: 3000, host: true },
  integrations: [
    mdx(),
    sitemap(),
    spotlightjs(),
    pageInsight(),
    tailwind()
  ]
});