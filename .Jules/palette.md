## 2024-05-23 - Accessibility: Button vs Label for File Inputs
**Learning:** Using a `<label>` to wrap a hidden `<input type="file" className="hidden">` is common but often fails keyboard accessibility checks because the input itself (being hidden) is removed from the tab order.
**Action:** Use a visible `<button>` with a ref to the hidden input. Trigger the input's click method programmatically via the button's `onClick`. Ensure the button has a descriptive `aria-label` or visible text.
