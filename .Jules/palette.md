## 2024-05-22 - Accessible File Inputs
**Learning:** Using `display: none` (via `.hidden`) for file inputs renders them inaccessible to keyboard users, preventing them from uploading files without a mouse.
**Action:** Use `.sr-only` to visually hide the input while keeping it in the DOM, and apply `focus-within` styles to the parent label to provide a clear visual focus indicator when the hidden input receives focus.
