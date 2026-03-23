## 2025-03-23 - Astro `set:html` XSS Vulnerability
**Vulnerability:** The `<HLine>` component used `set:html` with a template literal string to inject a span containing the text (`tagline`) into the DOM. This bypassed Astro's built-in HTML escaping.
**Learning:** `set:html` should never be used with string interpolation for dynamic content as it renders the content as raw HTML. Instead, structure the component directly in JSX using curly braces for variables and `class={dynamic}` for attributes, so that Astro properly escapes variables and avoids XSS.
**Prevention:** Avoid `set:html` for dynamic user content or arbitrary props. Use standard JSX structures that inherently escape variables instead of rendering unescaped, raw HTML strings.
