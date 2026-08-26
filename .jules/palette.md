## 2024-04-22 - Established Navigation Link Focus & Screen Reader Pattern
**Learning:** Found that the main header navigation link component `HeaderLink.astro` was missing critical accessibility enhancements: screen reader indication of active links and visible focus styles for keyboard navigation. Discovered the repository pattern for focus styles uses `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md` (as seen in `Social.astro` and `Footer.astro`). Discovered that using `aria-current={isActive ? "page" : undefined}` successfully omits the attribute from unselected Astro components.
**Action:** Going forward, always pair `aria-current="page"` for active navigation, and ensure interactive elements have a clear, distinct `focus-visible` ring style that matches the repository-specific styling conventions (`ring-blue-500`).
## 2024-05-27 - Added "Skip to content" link in General layout
**Learning:** The application was missing a skip link, a critical accessibility feature.
**Action:** Added a visually hidden "Skip to content" link in `General.astro` that becomes visible on keyboard focus and links directly to the `<main>` element, bypassing repetitive navigation content. This improves the experience for keyboard and screen reader users across all pages utilizing the layout.
## 2025-02-23 - Accessible Tooltips
**Learning:** Tailwind's `group-hover` utilities to display hidden elements (such as tooltips) must be paired with equivalent `group-focus-visible` classes to ensure keyboard accessibility. Also, the focusable parent element needs a visual focus indicator.
**Action:** Always add `group-focus-visible:visible group-focus-visible:opacity-100` alongside `group-hover` visibility classes, and ensure the parent link has focus states like `focus-visible:ring-2`.

## 2026-08-26 - Card Hover Transition and Accessibility

**Learning:** When using decorative characters (like arrows `&rarr;`) inside actionable elements (like headings inside link cards), they can be awkward for screen readers to announce (e.g., "rightwards arrow"). Additionally, adding micro-interactions to these elements on hover and focus makes the interface feel more responsive.
**Action:** Always add `aria-hidden="true"` to decorative span elements. Use Tailwind's `group` class on the parent container (like `li`) and use `group-hover` and `group-focus-within` on child elements to trigger smooth CSS transitions (`transition-transform duration-300 translate-x-1`) for a polished interaction state without complex styling.
