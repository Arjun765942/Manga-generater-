
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Use 127.0.0.1:4173 as per memory instructions
    page.goto("http://127.0.0.1:4173")

    # Wait for the setup screen to be visible
    # The Setup component has "INFINITE" and "HEROES" headings
    expect(page.get_by_text("INFINITE")).to_be_visible()

    # Locate the Hero Upload input and its label
    # The input should have class 'sr-only' now (was 'hidden')
    hero_input = page.locator("input[type='file']").first

    # Check if the input is hidden from view but present in DOM
    # Note: 'sr-only' usually means 1px size or clipped, so it might not be 'visible' to user but 'attached'
    # Playwright's to_be_visible() checks if it has non-zero size and opacity.
    # sr-only often has 1px size but clipped.

    # Let's verify it has the class 'sr-only'
    expect(hero_input).to_have_class("sr-only")

    # Now simulate tabbing to it.
    # Since the input is inside the label, and we want to verify focus styles on the label.
    # We can try to focus the label or the input.
    # If input is sr-only, it can receive focus.

    hero_input.focus()

    # Take a screenshot to verify the focus ring on the label
    # The label has `focus-within:ring-4`
    page.screenshot(path="verification/focus_state.png")

    print("Verification complete. Screenshot saved to verification/focus_state.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
