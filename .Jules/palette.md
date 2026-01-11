## 2025-01-11 - Accessible File Uploads with Hidden Inputs
**Learning:** Hidden file inputs (`display: none`) are inaccessible to keyboard users because they are removed from the accessibility tree. When using a `<label>` to trigger the file input, the input should be visually hidden (`sr-only` or similar) instead of completely removed (`hidden`). This keeps the input in the DOM and focusable.
**Action:** Use `sr-only` for file inputs and apply `focus-within` styles to the container/label to provide visual feedback when the hidden input is focused.
