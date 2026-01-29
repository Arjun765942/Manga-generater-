## 2026-01-29 - Accessible File Uploads
**Learning:** File inputs hidden with `display: none` (Tailwind `hidden`) remove the element from the accessibility tree, making it impossible for keyboard users to focus or trigger the upload.
**Action:** Use `sr-only` to visually hide the input but keep it focusable, and apply `focus-within` styles to the parent `<label`> to provide visual feedback when the hidden input is focused.
