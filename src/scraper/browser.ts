import puppeteer, { Browser } from 'puppeteer-core';

async function configureBrowser(): Promise<Browser> {
	let browser: Browser;
	try {
		console.log('Spinning up the browser...');
		browser = await puppeteer.launch({
			headless: true,
			executablePath: '/usr/bin/google-chrome-stable',
			args: [
				'--no-sandbox',
				'--disable-setuid-sandbox',
				'--disable-gpu',
				'--disable-dev-shm-usage',
			],
		});
	} catch (e) {
		console.log('Could not spin up the browser: ', e);
	}
	return browser;
}

export default { configureBrowser };
