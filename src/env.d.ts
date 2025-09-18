/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_STATSIG_CLIENT_KEY: string
	readonly PUBLIC_API_KEY: string
	readonly GA_TRACKING_ID?: string
	readonly PUBLIC_TAGGIN_SERVER?: string // your example
	readonly SUPABASE_URL: string
	readonly SUPABASE_KEY: string
	readonly SUPABASE_DB_URL: string
	readonly SUPABASE_ANON_KEY: string
	readonly SENTRY_AUTH_TOKEN: string
	readonly SENTRY_DSN: string
	readonly VERCEL: string
	readonly CI: string
	readonly VERCEL_URL: string
	readonly VERCEL_ENV: string
	readonly VERCEL_PROJECT_PRODUCTION_URL: string
	readonly VERCEL_REGION: string
	readonly VERCEL_DEPLOYMENT_ID: string
	readonly VERCEL_AUTOMATION_BYPASS_SECRET: string
	readonly VERCEL_GIT_PROVIDER: string
	readonly VERCEL_GIT_COMMIT_REF: string
	readonly VERCEL_GIT_COMMIT_SHA: string
	readonly VERCEL_GIT_COMMIT_MESSAGE: string
	readonly VERCEL_GIT_COMMIT_AUTHOR_LOGIN: string
	readonly VERCEL_GIT_COMMIT_AUTHOR_NAME: string
	readonly VERCEL_GIT_REPO_OWNER: string
	readonly VERCEL_GIT_REPO_SLUG: string
	readonly VERCEL_GIT_PULL_REQUEST_ID: string
	readonly PUBLIC_VERCEL_ENV: string
	readonly PUBLIC_VERCEL_URL: string
	readonly PUBLIC_VERCEL_AUTOMATION_BYPASS_SECRET: string
	readonly PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: string
	readonly PUBLIC_VERCEL_GIT_PROVIDER: string
	readonly PUBLIC_VERCEL_GIT_COMMIT_REF: string
	readonly PUBLIC_VERCEL_GIT_COMMIT_SHA: string
	readonly PUBLIC_VERCEL_GIT_COMMIT_MESSAGE: string
	readonly PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: string
	readonly PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_NAME: string
	readonly PUBLIC_VERCEL_GIT_REPO_OWNER: string
	readonly PUBLIC_VERCEL_GIT_REPO_SLUG: string
	readonly PUBLIC_VERCEL_GIT_PULL_REQUEST_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
