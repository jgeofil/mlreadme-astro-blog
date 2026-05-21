import fetchMeta from "fetch-meta-tags";

// ⚡ Bolt Optimization: In-memory cache for fetchMeta results to avoid repeated external HTTP calls
// during SSR build/render, especially when the same URL is bookmarked multiple times or across different pages.
const fetchMetaCache = new Map<
  string,
  Awaited<ReturnType<typeof fetchMeta>> | null
>();
// ⚡ Bolt Optimization: Promise deduplication to prevent concurrent SSR renders from triggering the same external HTTP request multiple times (stampeding herd).
const fetchMetaPromises = new Map<
  string,
  Promise<Awaited<ReturnType<typeof fetchMeta>> | null>
>();

export async function getCachedMeta(
  url: string,
): Promise<Awaited<ReturnType<typeof fetchMeta>> | null> {
  if (fetchMetaCache.has(url)) {
    return fetchMetaCache.get(url)!;
  }

  if (fetchMetaPromises.has(url)) {
    return await fetchMetaPromises.get(url)!;
  }

  const promise = (async () => {
    try {
      const res = await fetchMeta(url);
      fetchMetaCache.set(url, res);
      return res;
    } catch (e) {
      console.warn(`[Bookmark] Failed to fetch metadata for ${url}:`, e);
      fetchMetaCache.set(url, null);
      return null;
    } finally {
      fetchMetaPromises.delete(url);
    }
  })();

  fetchMetaPromises.set(url, promise);
  return await promise;
}
