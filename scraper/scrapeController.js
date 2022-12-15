import scrapeService from './scrapeService.js';

async function scrapePage(browserInstance) {
	let browser;
	try {
		browser = await browserInstance;
		await scrapeService.scraper(browser);
	} catch (e) {
		console.log('Could not resolve browser instance: ', e);
	}
}

export default (browserInstance) => scrapePage(browserInstance);
