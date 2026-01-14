
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Capture console logs
        page.on("console", lambda msg: print(f"Console: {msg.text}"))

        # Navigate to the app
        print("Navigating to app...")
        page.goto("http://127.0.0.1:4173")

        # Wait for "HEROES" to ensure app loaded
        print("Waiting for title...")
        expect(page.get_by_text("HEROES", exact=True)).to_be_visible(timeout=10000)

        print("App loaded. Verifying semantics...")

        # 1. Verify semantic labels for select inputs
        # Use get_by_label which only works if the label is correctly associated with the input
        expect(page.get_by_label("GENRE")).to_be_visible()
        expect(page.get_by_label("LANGUAGE")).to_be_visible()

        # Skip PREMISE check as it is conditional and not visible by default

        print("Labels found.")

        # 2. Verify File Inputs
        # We want to verify that the file input is "sr-only" (not hidden) and focusable.

        # Find the input.
        hero_input = page.locator('input[type="file"]').first

        # Check computed styles to verify it is NOT display: none
        display = hero_input.evaluate("el => window.getComputedStyle(el).display")
        print(f"Input display style: {display}")

        if display == "none":
            print("FAILURE: Input is display: none")
        else:
            print("SUCCESS: Input is not display: none")

        # Focus the input
        print("Focusing input...")
        hero_input.focus()

        # Take a screenshot to verify the focus ring on the parent label
        page.screenshot(path="verification/focus_ring_check.png")
        print("Screenshot taken.")

        browser.close()

if __name__ == "__main__":
    run()
