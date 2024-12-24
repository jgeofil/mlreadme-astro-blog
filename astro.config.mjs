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
	integrations: [mdx(), sitemap(), tailwind(
		{

		}
	), sentry(
		{
			dsn: 'https://a9b262c81239cb9eaac5ca99bca3fe36@o4508072521236480.ingest.us.sentry.io/4508072527331328',
			sourceMapsUploadOptions: {
				project: 'mlreadme-astro',
				authToken: process.env.SENTRY_AUTH_TOKEN,

			},
			clientInitPath: ".config/sentry.client.config.js",
			serverInitPath: ".config/sentry.server.config.js",
		}
	), spotlightjs()]
})
