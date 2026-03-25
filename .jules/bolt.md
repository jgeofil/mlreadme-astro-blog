# BOLT'S JOURNAL - CRITICAL LEARNINGS ONLY

## 2025-01-20 - Optimize LCP for Astro Image components

**Learning:** Astro's built-in `<Image />` component sets `loading="lazy"` and `decoding="async"` by default. While excellent for below-the-fold content, this negatively impacts the Largest Contentful Paint (LCP) when used for critical above-the-fold images (like banners or hero sections).
**Action:** Always identify above-the-fold images and explicitly set `loading="eager"` and `fetchpriority="high"` on the Astro `<Image />` component to prioritize their loading.

## 2024-05-23 - [Date Formatting Bottleneck]
**Learning:** `Date.toLocaleDateString` is shockingly slow when called repeatedly (e.g., rendering a list of blog posts) because it instantiates a new `Intl.DateTimeFormat` object each time. A benchmark showed unoptimized taking ~730ms vs optimized taking ~2ms for 1000 dates.
**Action:** When formatting multiple dates, cache the `Intl.DateTimeFormat` instance globally and reuse its `.format(date)` method instead of calling `.toLocaleDateString()` directly on the Date instances.

## 2025-03-25 - Promise Deduplication and finally() for SSR Caching
**Learning:** When implementing in-memory caching for SSR database queries, it is critical to implement promise deduplication (caching the in-flight promise itself, not just the eventual data result) to prevent "stampeding herd" issues. However, if that cached promise throws an error, it must be cleared. This clearing MUST be done inside a `.finally()` block (instead of a `.then()` block or solely within `.catch()`), otherwise a failed request will permanently lock the cache, preventing subsequent queries from executing and trapping the application in an error state.
**Action:** Always wrap cached promises with a `.finally(() => { inFlightPromise = null; })` to guarantee the lock is released regardless of success or failure.
