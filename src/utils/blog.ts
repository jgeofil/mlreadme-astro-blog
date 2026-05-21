import { getCollection, type CollectionEntry } from "astro:content";

// Cache variables for blog posts
let blogCache: CollectionEntry<"blog">[] | null = null;
let blogPromise: Promise<CollectionEntry<"blog">[]> | null = null;
let blogCacheTime = 0;
const CACHE_TTL = 60 * 1000; // 1 minute TTL

/**
 * Fetches and sorts the "blog" collection with in-memory caching and promise deduplication.
 * This significantly improves performance on SSR pages (like index.astro) by avoiding
 * repetitive file system reads and array sorting on every single request.
 */
export async function getCachedSortedBlogPosts(): Promise<
  CollectionEntry<"blog">[]
> {
  if (blogCache && Date.now() - blogCacheTime < CACHE_TTL) {
    return blogCache;
  }

  if (blogPromise) {
    return blogPromise;
  }

  blogPromise = getCollection("blog")
    .then((posts) => {
      // Sort posts by publication date descending
      const sorted = posts.sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
      );
      blogCache = sorted;
      blogCacheTime = Date.now();
      return sorted;
    })
    .finally(() => {
      blogPromise = null;
    });

  return blogPromise;
}
