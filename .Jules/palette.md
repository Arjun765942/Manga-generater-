## 2025-05-23 - Keyboard Accessible File Upload
**Learning:** File inputs hidden with `display: none` are inaccessible to keyboard users. Using a semantic `<button>` to trigger the hidden input via a `ref` restores accessibility while allowing custom styling.
**Action:** Always verify that custom file upload components are focusable and triggerable via keyboard. Use `useRef` to trigger the hidden input from a button.
