## 2025-02-23 - Astro Image Component LCP Bottleneck
**Learning:** Astro's `<Image>` component defaults to `loading="lazy"` and `decoding="async"`. This creates a significant Largest Contentful Paint (LCP) bottleneck for hero/banner images (above-the-fold content) because the browser delays fetching them.
**Action:** Always explicitly set `loading="eager"` and `fetchpriority="high"` on above-the-fold Astro `<Image>` components to optimize LCP.
