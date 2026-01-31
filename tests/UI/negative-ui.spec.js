const { test, expect } = require('@playwright/test');

test('Neg_UI_0002 – Special characters', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('%687$#$#@@');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('%687$#$#@@', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC01 Output:', result.replace('Sinhala', '').trim());
});


test('Neg_UI_0003 – Input with special characters', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mama @#$ gedhara yanavaa');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('මම @#$ ගෙදර යනවා', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC02 Output:', result.replace('Sinhala', '').trim());
});


