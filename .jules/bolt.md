## 2024-03-09 - Astro <Image> LCP Optimization
**Learning:** Astro's `<Image>` component defaults to `loading="lazy"` and `decoding="async"`. This causes above-the-fold images to load slower, delaying Largest Contentful Paint (LCP) and negatively impacting performance metrics.
**Action:** Always explicitly add `loading="eager"` and `fetchpriority="high"` to above-the-fold `<Image>` components to optimize LCP. Use conditional logic (e.g. `index === 0 ? "eager" : "lazy"`) for dynamic lists.
