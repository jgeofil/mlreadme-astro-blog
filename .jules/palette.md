## 2024-03-25 - Add aria-label to icon-only social media links
**Learning:** Icon-only links (like social media badges) often pass generic visual checks but fail screen reader accessibility tests because they lack readable text. Implementing a simple `aria-label` derived from the icon's intended destination or name ensures screen reader users understand the link's purpose.
**Action:** Always include an `aria-label` on any `<a>` or `<button>` element where the only child content is an `<svg>`, `<img>`, or purely decorative element (like an `<Icon>` component).
