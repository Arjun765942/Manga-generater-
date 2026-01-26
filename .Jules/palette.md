## 2024-05-22 - Accessible Custom File Inputs
**Learning:** The app uses `label` elements styled as buttons to wrap file inputs. Using `hidden` on the input makes it inaccessible to keyboard users. Using `sr-only` on the input combined with `focus-within` styles on the parent label restores keyboard accessibility while maintaining the custom design.
**Action:** Check for `className="hidden"` on file inputs wrapped in labels and replace with `sr-only` + `focus-within` on the parent.
