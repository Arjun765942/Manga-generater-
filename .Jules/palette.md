## 2026-01-28 - Custom File Input Accessibility
**Learning:** Custom file inputs hidden with `display: none` (`hidden` class) are inaccessible to keyboard users.
**Action:** Use `sr-only` on the input and `focus-within:outline` on the parent label to ensure visual focus indicators and keyboard accessibility.
