import puppeteer from 'puppeteer-core';

async function configureBrowser() {
	let browser;
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
