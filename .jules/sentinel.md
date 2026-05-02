## 2024-05-14 - XSS Vulnerability in Astro Templates via set:html

**Vulnerability:** A Cross-Site Scripting (XSS) vulnerability was found in an Astro component where `set:html` was used with string interpolation.
**Learning:** `set:html` inherently bypasses Astro's default HTML escaping, and directly passing interpolated template strings (like `<span class="${dynamic}">${text}</span>`) containing user-controlled props exposes the application to XSS attacks if those props are not sanitized. This applies to all versions of Astro when using the `set:html` directive unsafely. For example, if `text` comes from a user comment or URL parameter and contains `<script>alert(1)</script>`, it will be executed.
**Prevention:** Avoid `set:html` where possible. Prefer standard Astro/JSX component structure and rely on dynamic classes (`<span class={dynamic}>{text}</span>`) which automatically handle proper escaping and structure. If raw HTML _must_ be injected, ensure it is rigorously sanitized on the server before rendering using a library like `DOMPurify` or `sanitize-html`.## 2024-04-02 - Stored XSS in Link Components (href attribute)
**Vulnerability:** A Stored Cross-Site Scripting (XSS) vulnerability was found in `Social.astro` and `Bookmark.astro` where unsanitized user/database URLs were injected directly into `<a href={url}>`.
**Learning:** Astro properly escapes HTML content inside tags, but it does NOT validate URL protocols for attributes like `href`. If a user provides a URL starting with `javascript:`, clicking the link will execute arbitrary JavaScript in the context of the user's browser.
**Prevention:** Always validate URL protocols before passing them to an `href` attribute. Use URL parsing or a helper function to ensure the protocol is safe (e.g., `http:`, `https:`, `mailto:`, `tel:` or relative paths) and fallback to a safe default like `#` if the validation fails.

## 2024-10-25 - Information Disclosure via Astro HTML Comments

**Vulnerability:** Security vulnerability details and internal rationale were exposed in the client DOM through standard HTML comments (`<!-- -->`) within an `.astro` component.
**Learning:** While Astro automatically strips JS-style JSX comments (`{/* */}`) during the build and server-side rendering process, it explicitly preserves and outputs standard HTML comments into the final HTML markup. Using HTML comments for security annotations inadvertently leaks sensitive information to end-users.
**Prevention:** Always use server-side JSX comments (`{/* */}`) for security-related annotations, rationale, or internal logic within `.astro` components to ensure they are strictly stripped before reaching the client.

## 2024-10-25 - XSS Vulnerability in Astro Templates via Unescaped String Literal Attributes

**Vulnerability:** A Cross-Site Scripting (XSS) vulnerability was found in `Icon.astro` where string literals were used for component attributes (e.g., `src={`/icons/${name}.svg`}`).
**Learning:** In `.astro` templates, directly using unescaped string literals inside attribute definitions (e.g., `<Image src={`/icons/${name}.svg`} />`) can bypass HTML escaping if the attribute is not correctly parsed as an expression by the Astro compiler. Attackers can inject arbitrary attributes, including event handlers like `onload`, if the input controls part of the string.
**Prevention:** Always use standard Astro expressions wrapped in curly braces (`src={...}`) for dynamic attributes. Avoid string interpolation directly within the attribute declaration unless the entire interpolation is wrapped in the expression block.
