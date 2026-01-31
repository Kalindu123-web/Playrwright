const { test, expect } = require('@playwright/test');

test('homepage has correct title', async ({ page }) => {
  // 1️⃣ Go to a website
  await page.goto('https://example.com');

  // 2️⃣ Get page title
  const title = await page.title();

  // 3️⃣ Assert (check expected result)
  await expect(title).toBe('Example Domain');
});
