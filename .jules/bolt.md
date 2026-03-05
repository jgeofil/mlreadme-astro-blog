## 2024-03-20 - Explicitly Optimize LCP in Astro
**Learning:** Astro's `<Image>` component automatically adds `loading="lazy"` to images. For the Largest Contentful Paint (LCP) image, this defaults to a performance penalty.
**Action:** Always explicitly add `loading="eager"` and `fetchpriority="high"` to LCP candidate images (like hero banners) when using Astro's `<Image>` component to override the default lazy loading behavior.
