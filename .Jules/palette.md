## 2024-03-24 - File Input Accessibility
**Learning:** Custom file inputs implemented with `display: none` (`hidden` class) are completely inaccessible to keyboard users because they are removed from the accessibility tree.
**Action:** Always use `.sr-only` (visually hidden but accessible) for the input element and apply `:focus-within` styles to the parent label to provide a visual focus ring.
