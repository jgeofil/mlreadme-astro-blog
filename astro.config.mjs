import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

import { fileURLToPath } from 'url'
import cloudflare from '@astrojs/cloudflare';
// https://astro.build/config
export default defineConfig({
    site: 'https://mlread.me',
    adapter: cloudflare(),
    output: 'static',
    server: { port: 3000, host: true },
    integrations: [mdx(), sitemap(), tailwind(
        { applyBaseStyles: false, configFile: "./config/tailwind.config.js" }
    )],
    vite: {
        build: {
            cssMinify: true,
            minify: true
        }

    },

})
