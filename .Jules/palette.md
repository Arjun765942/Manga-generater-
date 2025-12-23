## 2024-05-23 - Accessible File Inputs
**Learning:** Custom file upload buttons often hide the actual `<input type="file">` using `display: none` (`hidden` in Tailwind). This removes the input from the accessibility tree and makes it impossible to focus via keyboard.
**Action:** Use `sr-only` (visually hidden but accessible) instead of `hidden`. Apply `focus-within` styles to the parent label to provide a visual focus indicator when the hidden input receives focus.
