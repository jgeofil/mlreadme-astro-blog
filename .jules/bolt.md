## 2024-03-12 - Astro Image LCP Bottleneck
**Learning:** Astro's `<Image>` component defaults to `loading="lazy"` and `decoding="async"`. For critical, above-the-fold images (like the hero banner on `index.astro`), this default behavior significantly delays Largest Contentful Paint (LCP).
**Action:** Always manually override this default by explicitly setting `loading="eager"` and `fetchpriority="high"` on any `<Image>` that appears above the fold to ensure immediate loading and optimal LCP scores.
