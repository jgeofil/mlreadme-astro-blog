## 2024-05-01 - Shared Components Executing DB Queries on SSR Pages

**Learning:** Shared components (like `Footer.astro`) on SSR pages execute their Supabase queries on every single request. If these queries fetch relatively static data, this becomes a huge architectural bottleneck causing redundant database load and increased latency.

**Action:** Implement an in-memory caching layer with a TTL in `src/db/supabase.ts` for these queries. Use this caching function (e.g. `getCachedSocials()`) in the shared component instead of querying Supabase directly.
