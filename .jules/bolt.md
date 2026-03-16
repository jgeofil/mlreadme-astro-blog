## 2024-03-16 - Prevent Redundant Database Queries on SSR Pages

**Learning:** Shared components (like `Footer.astro`) on Server-Side Rendered (SSR) pages execute their Supabase queries on every request. This creates a significant N+1-like performance bottleneck when the data is relatively static.
**Action:** Always implement an in-memory caching layer (e.g., with a TTL) in `src/db/supabase.ts` for these shared queries to prevent redundant database load and improve response times.
