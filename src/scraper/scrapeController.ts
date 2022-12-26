import { Browser } from 'puppeteer-core';
import scrapeService from './scrapeService.js';

async function scrapePage(browserInstance: Promise<Browser>) {
	let browser: Browser;
	try {
		browser = await browserInstance;
		await scrapeService.scraper(browser);
	} catch (e) {
		console.log('Could not resolve browser instance: ', e);
	}
}

export default (browserInstance: any) => scrapePage(browserInstance);
