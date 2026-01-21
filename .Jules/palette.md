## 2026-01-21 - Custom File Input Accessibility
**Learning:** Custom file inputs (styled via labels) are often inaccessible to keyboard users if the actual input is `hidden` (display: none).
**Action:** Use `sr-only` class on the input instead of `hidden` and add `focus-within` styles to the parent label to show a focus ring when the invisible input receives focus.
