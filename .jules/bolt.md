## 2024-03-04 - Intl.DateTimeFormat caching in V8/Node
**Learning:** `toLocaleDateString` repeatedly instantiates an `Intl.DateTimeFormat` object in V8 when options are provided, which takes ~90ms per 1k operations. Caching the `Intl.DateTimeFormat` object and calling `.format(date)` reduces this to ~2ms per 1k operations (a ~45x speedup).
**Action:** Always pre-instantiate `Intl.DateTimeFormat` objects outside of rendering loops or utility functions that get called frequently (like in list components).
