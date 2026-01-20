# Palette's Journal

## 2025-05-15 - Accessible File Inputs in Custom UI
**Learning:** Custom file input buttons (styled labels wrapping hidden inputs) are often inaccessible to keyboard users because `display: none` (`hidden`) removes the input from the tab order.
**Action:** Use `sr-only` instead of `hidden` on the input to keep it focusable, and apply `focus-within:ring` styles to the parent label to provide visual feedback when the hidden input has focus.
