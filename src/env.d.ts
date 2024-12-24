/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_API_KEY: string
	readonly GA_TRACKING_ID?: string
	readonly PUBLIC_TAGGIN_SERVER?: string // your example
	readonly SUPABASE_URL: string
	readonly SUPABASE_KEY: string
	readonly SUPABASE_DB_URL: string
	readonly SUPABASE_AUTH_SERVICE_ROLE_KEY: string
	readonly SUPABASE_AUTH_JWT_SECRET: string
	readonly SUPABASE_AUTH_ANON_KEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
