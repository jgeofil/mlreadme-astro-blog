## 2024-05-14 - Google Fonts @import Anti-pattern

**Learning:** Found Google Fonts imported via `@import` inside `global.css`. This blocks the browser from downloading fonts until the CSS file is fully downloaded and parsed, creating a sequential request chain that negatively impacts First Contentful Paint (FCP).
**Action:** Always move third-party font loading (like Google Fonts) out of CSS `@import` statements and into the `<head>` of the HTML document using `<link rel="preconnect">` and `<link rel="stylesheet">` tags to enable concurrent downloading.
