## 2024-05-20 - XSS in Astro Components via set:html
**Vulnerability:** XSS vulnerability found in `src/components/base/HLine.astro` where a `set:html` attribute was being used with a string interpolation literal that included user-provided properties (`tagline`).
**Learning:** Using string interpolation inside `set:html` (`set:html={<span class="${dynamic}">${text}</span>}`) bypasses Astro's built-in HTML escaping. This exposes the application to XSS attacks if any of the interpolated variables are user-controlled (like component props).
**Prevention:** Avoid `set:html` for dynamic styling or content. Instead, use standard Astro JSX to structure HTML and apply dynamic classes (e.g., `<span class={dynamic}>{text}</span>`), ensuring proper escaping of the content by default.
