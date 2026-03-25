## 2026-03-19 - In-memory caching for SSR database queries
**Learning:** Shared components (like `Footer.astro`) on Server-Side Rendered (SSR) pages execute their database queries on every request, which can cause redundant database load and 'stampeding herd' issues.
**Action:** Implemented an in-memory caching layer for the `socials` query in `src/db/supabase.ts`. This includes promise deduplication by caching the in-flight promise and ensuring it is cleared inside a `.finally()` block to prevent failed requests from permanently locking the cache.
