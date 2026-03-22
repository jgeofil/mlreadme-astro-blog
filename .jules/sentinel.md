## 2024-11-20 - XSS via set:html in Astro Components
**Vulnerability:** Cross-Site Scripting (XSS) in `src/components/base/HLine.astro` due to `set:html` with dynamic string interpolation.
**Learning:** Using `set:html` with template literals (e.g., `<span set:html={\`<span class="${dynamic}">${text}</span>`} />`) completely bypasses Astro's built-in HTML escaping, making it trivial for user input to inject malicious scripts.
**Prevention:** Avoid `set:html` for dynamic content. Build DOM structures using standard JSX syntax (e.g., `<span class={dynamic}>{text}</span>`) which automatically escapes variables.
