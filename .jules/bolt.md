## 2024-09-13 - [Astro SSG Performance]
**Learning:** Using `getCollection` in `getStaticPaths` or on high-traffic index pages triggers expensive file system reads for every page generation.
**Action:** Use an in-memory caching wrapper around `getCollection` (e.g., `getCachedSortedBlogPosts`) to cache collection fetching and sorting, significantly reducing Time to First Byte (TTFB) and build times.
