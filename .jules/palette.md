## 2024-05-18 - Pairing Visual States with `aria-current`
**Learning:** In Astro components, active navigation items are often styled visually (e.g. `border-b-4`), but this is invisible to screen readers without standard attributes.
**Action:** When creating or modifying navigation links (`<HeaderLink>`), always pair the visual active state with `aria-current="page"` to ensure screen reader users understand their current context within the site navigation.
