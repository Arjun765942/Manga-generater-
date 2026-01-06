## 2024-05-23 - Accessibility of File Inputs
**Learning:** Hidden file inputs wrapped in labels are mouse-friendly but often inaccessible to keyboard users because the label itself is not focusable by default.
**Action:** Use a visible `<button>` element with a clear focus state to programmatically trigger the hidden file input via a React `ref`. This ensures the action is reachable via Tab and activatable via Enter/Space.
