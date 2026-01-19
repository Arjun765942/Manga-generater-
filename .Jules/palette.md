## 2025-02-18 - Accessibility for Hidden Inputs
**Learning:** Using `hidden` (display: none) on file inputs removes them from the accessibility tree, making them inaccessible to keyboard users. Using `sr-only` (visually hidden but present) along with `focus-within` on the parent label ensures keyboard accessibility while maintaining custom styling.
**Action:** Always use `sr-only` for visually hidden but interactive elements, and pair with `focus-within` for visual feedback on the parent container.
