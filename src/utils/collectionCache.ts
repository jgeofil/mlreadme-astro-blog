import { getCollection, type CollectionEntry } from "astro:content";

let blogPostsCache: CollectionEntry<"blog">[] | null = null;
let blogPostsCacheTime = 0;
let blogPostsPromise: Promise<CollectionEntry<"blog">[]> | null = null;
const CACHE_TTL = 60 * 1000; // 1 minute TTL

/**
 * ⚡ Bolt Optimization: In-memory caching for Astro collections on SSR pages.
 * Prevents expensive file system reads and sorting on every request to index.astro.
 */
export async function getCachedSortedBlogPosts() {
  if (blogPostsCache && Date.now() - blogPostsCacheTime < CACHE_TTL) {
    return blogPostsCache;
  }

  if (blogPostsPromise) {
    return blogPostsPromise;
  }

  blogPostsPromise = Promise.resolve()
    .then(() => getCollection("blog"))
    .then((posts) => {
      // Sort posts in descending order by publication date
      const sortedPosts = posts.sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
      );
      blogPostsCache = sortedPosts;
      blogPostsCacheTime = Date.now();
      return sortedPosts;
    })
    .finally(() => {
      blogPostsPromise = null;
    });

  return blogPostsPromise;
}
