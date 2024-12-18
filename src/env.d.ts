/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_KEY: string;
  readonly GA_TRACKING_ID?: string;
  readonly PUBLIC_TAGGIN_SERVER?: string // your example
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
