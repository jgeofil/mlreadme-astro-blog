## 2026-03-19 - XSS via set:html interpolation in Astro
**Vulnerability:** Used `set:html` with string interpolation (`<span class="...">${tagline}</span>`) inside an Astro component (`src/components/base/HLine.astro`).
**Learning:** Bypasses built-in HTML escaping. When interpolating user-controlled props inside `set:html`, it creates a direct Cross-Site Scripting (XSS) vulnerability.
**Prevention:** Use standard Astro JSX for structure and dynamic classes (e.g., `<span class={dynamic}>{text}</span>`) to ensure proper escaping. Avoid `set:html` unless explicitly rendering pre-sanitized HTML content.
