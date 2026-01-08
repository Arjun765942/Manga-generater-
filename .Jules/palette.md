## 2024-05-23 - Accessible File Inputs
**Learning:** Standard `<input type="file">` elements are hard to style and often lead to non-accessible custom implementations (like wrapping in a label).
**Action:** Use a hidden `input` ref triggered by a semantic `<button>` for full keyboard support and screen reader compatibility.

## 2024-05-23 - Label Association
**Learning:** Visual labels implemented with `<p>` tags are invisible to screen readers when navigating forms.
**Action:** Always use `<label htmlFor="...">` and matching `id` on inputs to ensure programmatic association.