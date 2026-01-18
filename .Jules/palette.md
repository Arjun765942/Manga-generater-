## 2024-05-22 - Accessible File Inputs
**Learning:** `input[type="file"]` with `display: none` removes it from the accessibility tree, making it impossible for keyboard users to focus.
**Action:** Use `sr-only` class to hide the input visually while keeping it in the DOM. Apply `focus-within` styles to the parent `<label>` to provide a visual focus indicator when the hidden input is focused.
