## 2026-03-19 - Caching Supabase queries in shared SSR components
**Learning:** Shared components (like `Footer.astro`) on SSR pages (`export const prerender = false`) execute their Supabase queries on every request. This causes an architectural bottleneck due to redundant database load.
**Action:** Always implement an in-memory caching layer (e.g., with a TTL) in `src/db/supabase.ts` for these queries to prevent redundant database load.
