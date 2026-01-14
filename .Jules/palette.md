## 2024-05-23 - Accessibility of Hidden File Inputs
**Learning:** Using `display: none` (via Tailwind's `hidden` class) on file inputs completely removes them from the accessibility tree, making them unreachable via keyboard navigation.
**Action:** Always use `sr-only` (screen-reader only) utility class for file inputs inside styled labels, and add `focus-within` styles to the parent label to provide visual focus indicators.
