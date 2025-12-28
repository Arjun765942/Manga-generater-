## 2024-05-22 - [Accessible File Uploads]
**Learning:** Hidden file inputs inside labels are often skipped by keyboard navigation if the label itself isn't interactive.
**Action:** Use a visible `<button>` that programmatically triggers a hidden `<input>` via a ref. This ensures the action is in the natural tab order and can be activated with standard keyboard controls.
