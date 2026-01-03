## 2024-05-23 - Accessibility of Custom File Inputs
**Learning:** Placing a `display: none` file input inside a `<label>` makes the input inaccessible to keyboard users because the label itself is not focusable.
**Action:** Use a hidden `input` (visually hidden but in DOM) triggered by a visible `<button>` via `ref.current.click()`. This ensures the action is in the tab order and focusable.
