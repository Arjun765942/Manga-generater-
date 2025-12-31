## 2024-05-23 - Accessible File Inputs
**Learning:** Standard `<label>` wrapping a hidden file input (using `display: none`) is inaccessible to keyboard users because the input is removed from the accessibility tree and the label itself is not focusable.
**Action:** Always use a visible `<button>` that programmatically triggers a hidden `<input>` via a `ref`. This ensures the interaction is focusable and keyboard-accessible while maintaining custom styling.
