## 2026-03-19 - XSS via set:html interpolation in Astro

**Vulnerability:** Used `set:html` with string interpolation (`<span class="...">${tagline}</span>`) inside an Astro component (`src/components/base/HLine.astro`).
**Learning:** Bypasses built-in HTML escaping. When interpolating user-controlled props inside `set:html`, it creates a direct Cross-Site Scripting (XSS) vulnerability.
**Prevention:** Use standard Astro JSX for structure and dynamic classes (e.g., `<span class={dynamic}>{text}</span>`) to ensure proper escaping. Avoid `set:html` unless explicitly rendering pre-sanitized HTML content.

## 2024-05-14 - XSS Vulnerability in Astro Templates via set:html

**Vulnerability:** A Cross-Site Scripting (XSS) vulnerability was found in an Astro component where `set:html` was used with string interpolation.
**Learning:** `set:html` inherently bypasses Astro's default HTML escaping, and directly passing interpolated template strings (like `<span class="${dynamic}">${text}</span>`) containing user-controlled props exposes the application to XSS attacks if those props are not sanitized.
**Prevention:** Avoid `set:html` where possible. Prefer standard Astro/JSX component structure and rely on dynamic classes (`<span class={dynamic}>{text}</span>`) which automatically handle proper escaping and structure.
