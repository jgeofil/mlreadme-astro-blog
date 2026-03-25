# BOLT'S JOURNAL - CRITICAL LEARNINGS ONLY

## 2025-01-20 - Optimize LCP for Astro Image components

**Learning:** Astro's built-in `<Image />` component sets `loading="lazy"` and `decoding="async"` by default. While excellent for below-the-fold content, this negatively impacts the Largest Contentful Paint (LCP) when used for critical above-the-fold images (like banners or hero sections).
**Action:** Always identify above-the-fold images and explicitly set `loading="eager"` and `fetchpriority="high"` on the Astro `<Image />` component to prioritize their loading.
