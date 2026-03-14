## 2024-05-23 - [Date Formatting Bottleneck]

**Learning:** `Date.toLocaleDateString` is shockingly slow when called repeatedly (e.g., rendering a list of blog posts) because it instantiates a new `Intl.DateTimeFormat` object each time. A benchmark showed unoptimized taking ~730ms vs optimized taking ~2ms for 1000 dates.
**Action:** When formatting multiple dates, cache the `Intl.DateTimeFormat` instance globally and reuse its `.format(date)` method instead of calling `.toLocaleDateString()` directly on the Date instances.
