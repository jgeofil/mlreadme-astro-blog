import { createClient } from '@vercel/edge-config'
import { waitUntil } from '@vercel/functions'
import statsig from 'statsig-node-lite'
import { EdgeConfigDataAdapter } from 'statsig-node-vercel'
import type { MiddlewareResponseHandler } from 'astro'

export const onRequest: MiddlewareResponseHandler = async (context, next) => {
	const edgeConfigClient = createClient(process.env.EXPERIMENTATION_CONFIG)
	const dataAdapter = new EdgeConfigDataAdapter({
		edgeConfigClient: edgeConfigClient,
		edgeConfigItemKey: process.env.EXPERIMENTATION_CONFIG_ITEM_KEY,
	})

	await statsig.initialize(process.env.STATSIG_SERVER_API_KEY as string, {
		dataAdapter: dataAdapter,
		initStrategyForIDLists: 'none',
		disableIdListsSync: true,
	})

	const userID = context.request.headers.get('x-vercel-id') || 'anonymous'
	const user = { userID }

	const showNewHeader = await statsig.checkGate(user, 'show_new_header')
	const bannerConfig = await statsig.getConfig(user, 'banner_config')

	context.locals.showNewHeader = showNewHeader
	context.locals.bannerConfig = bannerConfig.value

	waitUntil(statsig.flush(1000))

	return next()
}
