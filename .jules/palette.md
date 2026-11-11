## 2023-11-11 - Image URLs as Alt Text
**Learning:** Found that using image URLs as alt text on images inside descriptive links causes screen readers to read unhelpful URLs.
**Action:** When adding images inside links that already contain descriptive text, use `alt="" aria-hidden="true"` on the `<img />` to hide it from assistive technologies.
