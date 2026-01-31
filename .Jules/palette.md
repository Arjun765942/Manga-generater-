## 2025-10-27 - Keyboard Accessibility for File Inputs
**Learning:** `className="hidden"` removes elements from the accessibility tree, making them inaccessible to keyboard users. When using custom file upload buttons (wrapping a label around a hidden input), the input must use `className="sr-only"` instead.
**Action:** Always check that "hidden" inputs are actually meant to be inaccessible. If they are interactive controls with custom styling, use `sr-only` and ensure the visible container has `:focus-within` styles to indicate focus.
