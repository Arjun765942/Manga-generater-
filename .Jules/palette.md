# Palette's Journal

## 2024-05-23 - Initial Setup
**Learning:** This is a fresh journal for tracking critical UX/a11y learnings.
**Action:** Use this file to document only critical insights as per instructions.

## 2024-05-23 - Accessible File Inputs
**Learning:** File inputs hidden with `display: none` (Tailwind `hidden`) inside `label` elements are inaccessible to keyboard users because they cannot be focused.
**Action:** Use a visible `<button>` that programmatically triggers the hidden `<input>` via a `ref` (and keeping the input hidden) to ensure keyboard accessibility.
