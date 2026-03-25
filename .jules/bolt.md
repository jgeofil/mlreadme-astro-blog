# BOLT'S JOURNAL - CRITICAL LEARNINGS ONLY

## 2025-01-20 - Optimize LCP for Astro Image components

**Learning:** Astro's built-in `<Image />` component sets `loading="lazy"` and `decoding="async"` by default. While excellent for below-the-fold content, this negatively impacts the Largest Contentful Paint (LCP) when used for critical above-the-fold images (like banners or hero sections).
**Action:** Always identify above-the-fold images and explicitly set `loading="eager"` and `fetchpriority="high"` on the Astro `<Image />` component to prioritize their loading.
## 2024-05-23 - [Date Formatting Bottleneck]
**Learning:** `Date.toLocaleDateString` is shockingly slow when called repeatedly (e.g., rendering a list of blog posts) because it instantiates a new `Intl.DateTimeFormat` object each time. A benchmark showed unoptimized taking ~730ms vs optimized taking ~2ms for 1000 dates.
**Action:** When formatting multiple dates, cache the `Intl.DateTimeFormat` instance globally and reuse its `.format(date)` method instead of calling `.toLocaleDateString()` directly on the Date instances.
