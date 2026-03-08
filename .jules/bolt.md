## 2024-05-24 - [Optimize LCP with eager loading]
**Learning:** Astro's `<Image>` component defaults to `loading="lazy"` and `decoding="async"`. This is bad for critical above-the-fold images (like Hero/Banner images), as it delays their loading and hurts the Largest Contentful Paint (LCP) metric.
**Action:** Always explicitly add `loading="eager"` and `fetchpriority="high"` to above-the-fold images using the `<Image>` component in Astro to ensure optimal LCP performance.
