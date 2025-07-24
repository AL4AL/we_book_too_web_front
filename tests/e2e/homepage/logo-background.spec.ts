import { expect, Response, test } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.testing' });

test.describe('Load of Logo and Background images', () => {
	test('background loads', async function ({ page }) {
		let found = false;
		const listener = function (response: Response) {
			if (
				response.url().endsWith('home-page-background.webp') &&
				response.ok()
			) {
				found = true;
			}
		};

		page.on('response', listener);

		if (process.env.BASE_URL === undefined) {
			throw new Error('BASE_URL is required');
		}
		await page.goto(process.env.BASE_URL);

		await page.waitForTimeout(5000);

		page.off('response', listener);

		expect(found).toBeTruthy();
	});
})
