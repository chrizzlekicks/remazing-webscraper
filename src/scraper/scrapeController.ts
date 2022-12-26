import { Browser } from 'puppeteer-core';
import scrapeService from './scrapeService.js';

async function scrapePage(browserInstance: Promise<Browser>) {
	let browser: Browser;
	try {
		browser = await browserInstance;
		await scrapeService.scraper(browser);
	} catch (err: any) {
		console.log('Could not resolve browser instance: ', err);
	}
}

export default (browserInstance: Promise<Browser>) =>
	scrapePage(browserInstance);
