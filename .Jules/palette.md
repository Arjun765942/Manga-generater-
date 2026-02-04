## 2026-02-04 - Accessible File Uploads
**Learning:** Found a pattern where file inputs were hidden with `display: none` inside labels, making them inaccessible to keyboard users.
**Action:** Replace `hidden` with `sr-only` and add `focus-within` styles (e.g., `outline`) to the parent label to restore keyboard accessibility and provide visual focus feedback.
