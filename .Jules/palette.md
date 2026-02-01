## 2025-10-26 - Accessible Custom File Inputs
**Learning:** `input[type="file"]` with `display: none` (Tailwind `.hidden`) is inaccessible to keyboard users. Using `.sr-only` keeps it in the DOM. To visualize focus, apply `:focus-within` styles to the parent `<label>`.
**Action:** Always use `.sr-only` for hidden inputs inside custom buttons and ensure the container has visual focus feedback.
