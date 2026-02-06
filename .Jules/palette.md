## 2025-05-22 - Accessibility of Hidden Inputs
**Learning:** Using `display: none` (via `.hidden`) on file inputs removes them from the accessibility tree, making them impossible to navigate via keyboard.
**Action:** Always use `.sr-only` (screen-reader only) for file inputs to keep them in the DOM and accessible, while wrapping them in a label with `focus-within` styles to provide visual feedback when the hidden input receives focus.
