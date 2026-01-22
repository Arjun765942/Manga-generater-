## 2024-05-23 - Accessible File Upload Inputs
**Learning:** Using `hidden` on file inputs removes them from the tab order, making them inaccessible to keyboard users. Using `sr-only` keeps them semantically present but visually hidden.
**Action:** When creating custom file upload buttons, wrap the `input type="file"` (with `sr-only`) in a `<label>` and apply `focus-within` styles to the label to show focus state when the input is selected via keyboard.
