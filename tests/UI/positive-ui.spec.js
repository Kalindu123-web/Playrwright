const { test, expect } = require('@playwright/test');

test('Pos_UI_0001 – Text field accepts normal input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mama gedhara yanavaa');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('මම ගෙදර යනවා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('TC01 Output:', result.replace('Sinhala', '').trim());
});


test('Pos_UI_0002 – UI handles short sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('ada ZOOM mitin ekak thiyenawaa');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('අඩා ZOOM මිටින් එකක් තියෙනවා', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC02 Output:', result.replace('Sinhala', '').trim());
});


