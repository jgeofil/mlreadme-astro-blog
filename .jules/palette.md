## 2024-06-10 - Tags Keyboard Accessibility
**Learning:** Custom tag components often have rich tooltips revealed on hover (`group-hover`), but miss out on key keyboard-driven accessibility since focus isn't styled to trigger tooltips. This excludes keyboard-only users from context.
**Action:** Always add `group-focus-visible` classes matching `group-hover` when implementing tooltips on interactive elements to ensure feature parity for keyboard users, while applying a focus ring.
