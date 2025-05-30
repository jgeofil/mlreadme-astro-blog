import type { Loader } from 'astro/loaders'
import { glob } from 'astro/loaders'

export function blogLoader(params: { pattern: string; base: string }): Loader {
	return {
		name: 'feed-loader',
		load: async (loaderContext) => {
			loaderContext.logger.info('Loading posts')
			const globLoader = glob(params)

			const production = import.meta.env.PUBLIC_VERCEL_ENV === 'production' || import.meta.env.PROD

			await globLoader.load(loaderContext)

			return loaderContext.store.entries().forEach(([id, entry]) => {
   				if (entry.data.draft && production) {
   					loaderContext.logger.info(`Skipping draft post ${id}`)
   					loaderContext.store.delete(id)
   				}
   			});

		}
	}
}
