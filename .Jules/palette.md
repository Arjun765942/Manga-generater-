## 2026-01-01 - File Upload Accessibility
**Learning:** Using `<label>` to wrap hidden file inputs makes them inaccessible to keyboard users because `label` is not focusable.
**Action:** Always use a visible `<button>` that programmatically triggers a hidden `<input>` via a `ref`.
