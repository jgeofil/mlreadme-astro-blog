import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import 'dotenv/config';
import pageInsight from "astro-page-insight";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://mlread.me',
  integrations: [
    mdx(), 
    sitemap(), 
    sentry(), 
    spotlightjs(),
    pageInsight(),
    storyblok({
      accessToken: process.env.STORYBLOK_TOKEN,
      bridge: true,
      apiOptions: {
        region: "us",
      },
      components: {
        feature: 'storyblok/Feature',
        //grid: 'storyblok/Grid',
        //teaser: 'storyblok/Teaser',
      },
    }),
  ]
});