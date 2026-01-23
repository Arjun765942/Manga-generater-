## 2025-02-18 - Keyboard Accessibility for File Uploads
**Learning:** Standard `<input type="file" className="hidden" />` patterns are inaccessible to keyboard users because `hidden` (display: none) removes the element from the accessibility tree. Wrapping it in a label isn't enough if the label itself isn't focusable.
**Action:** Use `sr-only` (visually hidden but accessible) instead of `hidden` for the input. Apply `focus-within` styles (like a high-contrast outline) to the parent label so users see when the invisible input has focus.
