## 2025-05-20 - File Upload Accessibility
**Learning:** Using `display: none` (via Tailwind's `hidden` class) on file inputs makes them completely inaccessible to keyboard users because they cannot receive focus.
**Action:** Use `sr-only` class instead, which visually hides the element but keeps it in the DOM and focusable. Ensure the parent label has visual focus styles (e.g., `focus-within:outline`) to provide feedback when the hidden input is focused.
