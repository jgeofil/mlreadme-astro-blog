## 2024-03-12 - Cross-Site Scripting (XSS) in Astro Components via `set:html`
**Vulnerability:** A reusable UI component (`HLine.astro`) dynamically constructed an HTML string with unsanitized props and rendered it using Astro's `set:html` directive, exposing any page using it to potential Cross-Site Scripting (XSS).
**Learning:** `set:html` completely bypasses Astro's built-in escaping mechanisms. It should only be used when rendering raw HTML from a strictly trusted, heavily sanitized source (e.g., Markdown converted to HTML internally).
**Prevention:** Construct elements directly in JSX and use standard interpolation (`{variable}`) to let Astro automatically handle safe HTML escaping. Never construct raw HTML strings and pass them directly to `set:html`.
