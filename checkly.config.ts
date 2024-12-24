import { defineConfig } from 'checkly'
import { Frequency, RetryStrategyBuilder } from 'checkly/constructs'

export default defineConfig({
	projectName: 'mlreadme-astro-blog',
	logicalId: 'mlreadme-astro-blog-1',
	repoUrl: 'https://github.com/jgeofil/mlreadme-astro-blog',
	checks: {
		activated: true,
		muted: false,
		runtimeId: '2022.10',
		frequency: Frequency.EVERY_1H,
		locations: ['us-east-1', 'eu-west-1', 'ca-central-1', 'ap-east-1'],
		checkMatch: '**/tests/**/*.check.ts',
		ignoreDirectoriesMatch: [],
		retryStrategy: RetryStrategyBuilder.linearStrategy({
			baseBackoffSeconds: 30,
			maxRetries: 2,
			sameRegion: false
		}),

		browserChecks: {
			frequency: Frequency.EVERY_2H,
			testMatch: '**/tests/**/*.spec.ts'
		},

		playwrightConfig: {
			use: {
				extraHTTPHeaders: {
					'x-vercel-protection-bypass': process.env.VERCEL_AUTOMATION_BYPASS_SECRET,
					'x-vercel-set-bypass-cookie': 'samesitenone'
				}
			}
		}
	},
	cli: {
		runLocation: 'eu-west-1'
	}
})
