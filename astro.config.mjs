import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mlread.me",
  adapter: vercel({
    edgeMiddleware: true,
    maxDuration: 60,
    isr: true,
  }),
  output: "static",
  server: { port: 3000, host: true },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: true,
    },
    css: {
      //devSourcemap: true,
      transformer: "postcss",
    },
  },
});
