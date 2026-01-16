## 2026-01-16 - Accessible File Inputs with Tailwind
**Learning:** `input[type="file"]` with `hidden` class removes it from the accessibility tree, making it impossible for keyboard users to upload files.
**Action:** Use `sr-only` on the input to hide it visually but keep it in DOM, and apply `focus-within:ring` styles to the parent `<label>` to provide visual focus indication.
