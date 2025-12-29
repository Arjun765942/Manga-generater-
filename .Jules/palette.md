## 2024-05-23 - Accessibility of Hidden File Inputs
**Learning:** Standard `<label>` wrapping a `hidden` (`display: none`) file input is inaccessible to keyboard users because the input is removed from the tab order.
**Action:** Use a visible `<button>` that programmatically triggers a hidden input via `ref` (or `click()` method) to ensure both visual style and keyboard accessibility.
