# BOLT'S JOURNAL - CRITICAL LEARNINGS ONLY

## 2025-01-20 - Optimize LCP for Astro Image components

**Learning:** Astro's built-in `<Image />` component sets `loading="lazy"` and `decoding="async"` by default. While excellent for below-the-fold content, this negatively impacts the Largest Contentful Paint (LCP) when used for critical above-the-fold images (like banners or hero sections).
**Action:** Always identify above-the-fold images and explicitly set `loading="eager"` and `fetchpriority="high"` on the Astro `<Image />` component to prioritize their loading.
## 2024-05-23 - [Date Formatting Bottleneck]
**Learning:** `Date.toLocaleDateString` is shockingly slow when called repeatedly (e.g., rendering a list of blog posts) because it instantiates a new `Intl.DateTimeFormat` object each time. A benchmark showed unoptimized taking ~730ms vs optimized taking ~2ms for 1000 dates.
**Action:** When formatting multiple dates, cache the `Intl.DateTimeFormat` instance globally and reuse its `.format(date)` method instead of calling `.toLocaleDateString()` directly on the Date instances.

## 2026-03-26 - Adding Eager Loading to Above-The-Fold Images
**Learning:** Astro's `Image` component natively supports `loading="eager"` and `fetchpriority="high"`, but this is frequently forgotten on main entry points and list elements like article cards or the top image in a list. When images represent Largest Contentful Paint (LCP) and are displayed immediately, failing to add these attributes can have a big impact on LCP scores.
**Action:** Always check components containing `Image` elements, particularly hero banners, avatars, or lists of cards, to see if they can benefit from `loading="eager"` and `fetchpriority="high"` for the initial/first items to improve the critical rendering path.

## 2023-10-24 - Slice Astro collections to prevent O(N) rendering bottlenecks
**Learning:** When fetching content collections (e.g., `getCollection('blog')`) for views that only display a few items (like 'recent posts' components on the home page), the entire collection is returned. If not immediately sliced, the framework iterates over or stores the full N array, and subsequent `.map()` calls can lead to unbounded DOM growth and severe performance degradation as the collection scales.
**Action:** Always slice or limit the array immediately (e.g., `.slice(0, 4)`) after fetching and sorting to constrain processing and DOM elements to O(1) instead of O(N).
