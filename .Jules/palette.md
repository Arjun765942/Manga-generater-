## 2026-02-05 - Accessible Custom File Inputs
**Learning:** Using `display: none` (Tailwind `hidden`) for custom file inputs removes them from the accessibility tree, making them impossible to tab to. The `sr-only` class keeps them in the DOM for screen readers/keyboard focus.
**Action:** Always use `sr-only` for hidden inputs and apply `focus-within` styles to the parent label to show a focus ring when the invisible input is selected.
