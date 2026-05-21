import fetchMeta from "fetch-meta-tags";

// ⚡ Bolt: In-memory cache to prevent redundant network requests for identical URLs.
// Caches the in-flight promise to prevent 'stampeding herd' issues when the same URL
// is bookmarked multiple times (e.g., across different MDX files or within the same file).
const metaCache = new Map<
  string,
  Promise<Awaited<ReturnType<typeof fetchMeta>>>
>();

export function getCachedMeta(url: string) {
  if (!metaCache.has(url)) {
    metaCache.set(url, fetchMeta(url));
  }
  return metaCache.get(url)!;
}
