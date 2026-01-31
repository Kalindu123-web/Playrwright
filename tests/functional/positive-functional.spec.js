const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 – Convert a short daily greeting phrase', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mama panthi yanavaa.');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('මම පන්ති යනවා.', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC01 Output:', result.replace('Sinhala', '').trim());
});


test('Pos_Fun_0003 – Polite request is understood correctly', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('please meka poddak explain karanna puLuvandha?');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('please මෙක පොඩ්ඩක් explain කරන්න පුළුවන්ද?', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC02 Output:', result.replace('Sinhala', '').trim());
});


test('Pos_Fun_0005 – Convert interrogative question form', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('oyaa kavadhdha enna hithan inne?');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('ඔයා කවද්ද එන්න හිතන් ඉන්නේ?', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC03 Output:', result.replace('Sinhala', '').trim());
});


test('Neg_Fun_0008 – Convert plural pronoun sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('api yamu');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('අපි යමු', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC04 Output:', result.replace('Sinhala', '').trim());
});


test('Neg_Fun_0011 – Convert sentence with currency', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('meeka Rs. 5343');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('මේක Rs. 5343', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC05 Output:', result.replace('Sinhala', '').trim());
});