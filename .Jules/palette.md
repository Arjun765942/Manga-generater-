## 2025-10-26 - Accessible File Inputs
**Learning:** Wrapping a hidden file input in a label provides mouse access but fails keyboard accessibility because standard labels aren't focusable.
**Action:** Use a visible `<button>` that programmatically triggers a hidden `<input>` via a ref to ensure keyboard users can upload files.