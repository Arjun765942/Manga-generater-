## 2026-01-27 - Custom Button Focus States
**Learning:** Tailwind `ring` utilities rely on `box-shadow`, which conflicts with custom components (like `.comic-btn`) that define their own `box-shadow`. This causes the focus ring to be invisible or overridden.
**Action:** Use `outline` utilities (`outline`, `outline-width`, `outline-color`) for focus states on components with existing box-shadows to ensure visibility without conflict.
