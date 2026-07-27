import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'


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
	integrations: [mdx(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssMinify: true,
			minify: true
		}
	},

})
