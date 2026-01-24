## 2024-05-22 - File Upload Accessibility
**Learning:** Custom file upload buttons implemented with `<label>` wrapping a `hidden` input are inaccessible to keyboard users because `display: none` removes the input from the tab order.
**Action:** Use `sr-only` class on the input instead of `hidden`, and add `focus-within` styles (e.g., `focus-within:outline`) to the parent label to provide a visual focus indicator.
