# Palette's Journal

## 2025-02-12 - Semantic Forms & Hidden Inputs
**Learning:** Custom file inputs using `hidden` (display: none) remove the element from the accessibility tree, making it impossible for keyboard users to focus.
**Action:** Always use `sr-only` (visually hidden but accessible) for the input and apply `focus-within` styles to the visible label container to show focus state.
