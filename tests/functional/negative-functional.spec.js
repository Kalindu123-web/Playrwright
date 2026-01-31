const { test, expect } = require('@playwright/test');

test('Pos_Fun_0002 – Numbers-only input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('123456789');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('123456789', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC01 Output:', result.replace('Sinhala', '').trim());
});


test('Neg_Fun_0005 – Random numbers within text', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('ma123ma gedh456ara ya789navaa');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('ම123ම ගෙද්456අර ය789නවා', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC02 Output:', result.replace('Sinhala', '').trim());
});


test('Pos_Fun_0007 – Very long text without spaces', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('matapaankannaoonee');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('මටපාන්කන්නඕනේ', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC03 Output:', result.replace('Sinhala', '').trim());
});


