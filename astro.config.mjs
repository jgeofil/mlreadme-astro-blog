import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import spotlightjs from '@spotlightjs/astro'
import tailwind from '@astrojs/tailwind'
import sentry from '@sentry/astro'
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
	integrations: [mdx(), sitemap(), tailwind(), sentry(), spotlightjs()]
})
