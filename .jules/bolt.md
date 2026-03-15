## 2024-05-24 - Cache Supabase queries on SSR pages
**Learning:** Shared components (like `Footer.astro`) on SSR pages (`export const prerender = false`) will execute their Supabase queries on every single request. In Astro, these pages run server-side rendering, leading to N redundant requests for the same exact data if not cached.
**Action:** Always implement an in-memory or Redis caching layer (e.g., `getCachedSocials()`) for frequently queried, relatively static data used in shared components on SSR pages.
