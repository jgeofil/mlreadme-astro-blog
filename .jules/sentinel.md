## 2026-03-18 - Prevent XSS in HLine Component
**Vulnerability:** The `HLine.astro` component uses `set:html` with dynamic string interpolation (`tagline`) which could allow Cross-Site Scripting (XSS) if the `tagline` prop contains malicious user input.
**Learning:** Using `set:html` with unescaped variables bypasses Astro's built-in XSS protections. Even for internal components, defense in depth dictates that we shouldn't trust props to be safe.
**Prevention:** Avoid `set:html` for dynamic content styling. Use standard Astro JSX for structure and conditional classes (e.g., `<span class={...}>{tagline}</span>`) which automatically escapes the text content.
