import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import tailwind from '@astrojs/tailwind'

import { fileURLToPath } from 'url'
// https://astro.build/config
export default defineConfig({
	site: 'https://mlread.me',
	adapter: vercel({
		edgeMiddleware: true,
		maxDuration: 60,
		isr: true
	}),
	output: 'static',
	server: { port: 3000, host: true },
	integrations: [mdx(), sitemap(), tailwind(
		{ applyBaseStyles: false, configFile: "./config/tailwind.config.js" }
	)],
	vite: {
		build: {
			cssMinify: true,
			minify: true
		},
		css: {
			//devSourcemap: true,
			transformer: 'postcss'
		},

	},
	security: {
		checkOrigin: true
	},
})
