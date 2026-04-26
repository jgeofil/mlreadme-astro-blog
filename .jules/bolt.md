# BOLT'S JOURNAL - CRITICAL LEARNINGS ONLY

## 2026-03-26 - Adding Eager Loading to Above-The-Fold Images

**Learning:** Astro's `Image` component natively supports `loading="eager"` and `fetchpriority="high"`, but this is frequently forgotten on main entry points and list elements like article cards or the top image in a list. When images represent Largest Contentful Paint (LCP) and are displayed immediately, failing to add these attributes can have a big impact on LCP scores.
**Action:** Always check components containing `Image` elements, particularly hero banners, avatars, or lists of cards, to see if they can benefit from `loading="eager"` and `fetchpriority="high"` for the initial/first items to improve the critical rendering path.

## 2025-01-20 - Optimize LCP for Astro Image components

**Learning:** Astro's built-in `<Image />` component sets `loading="lazy"` and `decoding="async"` by default. While excellent for below-the-fold content, this negatively impacts the Largest Contentful Paint (LCP) when used for critical above-the-fold images (like banners or hero sections).
**Action:** Always identify above-the-fold images and explicitly set `loading="eager"` and `fetchpriority="high"` on the Astro `<Image />` component to prioritize their loading.

## 2024-05-28 - Avoid forcing max quality on LCP images in Astro

**Learning:** Forcing `quality="max"` on large Astro `<Image>` components, particularly hero images or banners used as LCP elements, disables the default compression and leads to massive payload sizes, hurting performance significantly.
**Action:** Omit the `quality` attribute on large above-the-fold or LCP `<Image>` components to allow Astro to apply sensible default web compression and significantly reduce download sizes.

## 2024-05-23 - [Date Formatting Bottleneck]

**Learning:** `Date.toLocaleDateString` is shockingly slow when called repeatedly (e.g., rendering a list of blog posts) because it instantiates a new `Intl.DateTimeFormat` object each time. A benchmark showed unoptimized taking ~730ms vs optimized taking ~2ms for 1000 dates.
**Action:** When formatting multiple dates, cache the `Intl.DateTimeFormat` instance globally and reuse its `.format(date)` method instead of calling `.toLocaleDateString()` directly on the Date instances.

## 2024-05-15 - Reduce Waterfall Latency with Promise.all()

**Learning:** Sequential `await` calls for independent data fetching operations (like `getEntry`, `getEntries`, and `getCollection`) in Astro components cause unnecessary waterfall latency and delay the First Byte response.
**Action:** Always parallelize independent asynchronous data fetching using `Promise.all()` to ensure they run concurrently, reducing overall rendering time without changing the component's output.

## 2024-04-02 - Prefer .some() over .map().includes() for array matching

**Learning:** Checking for inclusion in an array of objects by mapping properties first (e.g., `arr.map(x => x.id).includes(target)`) causes unnecessary memory allocations by creating an intermediate array and iterates through elements twice (first for mapping, then for checking inclusion). This is inefficient, especially when scaling up data.
**Action:** Always prefer `.some()` (e.g., `arr.some(x => x.id === target)`) over `.map().includes()`. It stops execution early once a match is found and avoids allocating memory for a new intermediate array, ensuring both better speed and lower memory usage.

## 2025-01-20 - Fetch Collections in getStaticPaths for SSG Build Optimization

**Learning:** When generating multiple static pages using `getStaticPaths` (like `/tags/[id]` or `/sections/[id]`), calling `getCollection()` in the component body fetches and filters the entire collection for *every single generated page*. This changes build time complexity to O(N²), slowing down the build significantly as data scales.
**Action:** Always fetch the entire required collections inside `getStaticPaths()` exactly once, perform any necessary iteration or filtering there, and pass the specific subsets or related items to the Astro component via `props`. This reduces the build complexity to O(N).

## 2025-01-20 - Replace O(N²) nested filtering with O(N) Hash Map lookups in SSG paths

**Learning:** When using `getStaticPaths` to generate pages from content collections (like tags or categories), using `.filter()` inside the `.map()` loop creates an O(N²) complexity bottleneck that exponentially increases build times as content scales.
**Action:** Always pre-process collections into a `Map` (Hash Map) *before* mapping over the paths. This allows for an O(1) lookup during the path generation loop, effectively reducing the time complexity from O(N²) to O(N).
