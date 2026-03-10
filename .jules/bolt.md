## 2024-05-24 - [Astro Image LCP Optimization]
**Learning:** Astro's `<Image>` component defaults to `loading="lazy"` and `decoding="async"`. While great for general images, this delays loading of above-the-fold images and hurts Largest Contentful Paint (LCP) performance.
**Action:** Always explicitly set `loading="eager"` and `fetchpriority="high"` on above-the-fold images (like banners/hero images) in Astro applications.
