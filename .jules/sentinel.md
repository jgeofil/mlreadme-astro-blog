## 2024-05-18 - XSS via set:html string interpolation in Astro components
**Vulnerability:** A Cross-Site Scripting (XSS) vulnerability was found in `HLine.astro` where the `tagline` prop was interpolated into an HTML string and rendered using Astro's `set:html` directive, bypassing auto-escaping.
**Learning:** This existed because the component author used template literals to conditionally apply classes within an HTML string, rather than using Astro's native `class:list` directive for dynamic styling alongside native `{variable}` rendering.
**Prevention:** Always use native Astro JSX rendering (e.g., `<span>{variable}</span>`) which automatically escapes HTML. For dynamic classes, use the `class:list` directive instead of building HTML strings and using `set:html`.
