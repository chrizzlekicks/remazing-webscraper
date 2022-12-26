import { Browser } from 'puppeteer-core';
import { ProductType } from '../@types/product.js';
import Product from '../models/Product.js';

const scrapeService = {
	url: 'https://www.amazon.de/s?k=kopfh%C3%B6rer&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2ABEZIQ2Y0D99&sprefix=kopfh%C3%B6rer%2Caps%2C99&ref=nb_sb_noss_2',
	/**
	 * scrapes a web page
	 * @param {*} browser
	 */
	async scraper(browser: Browser): Promise<void> {
		const page = await browser.newPage();
		console.log(`Loading ${this.url}...`);
		await page.goto(this.url);

		/**
		 * collect all the links
		 */
		const urls: string[] = await page.evaluate(() => {
			const links = [];
			const collection = document.querySelectorAll(
				'div.s-product-image-container.aok-relative.s-image-overlay-grey.s-text-center.s-padding-left-small.s-padding-right-small.s-flex-expand-height div.aok-relative span.rush-component a.a-link-normal.s-no-outline'
			);
			collection.forEach((link) => {
				links.push('https://www.amazon.de' + link.getAttribute('href'));
			});
			return links;
		});

		/**
		 *
		 * @param {*} link
		 * @returns Promise
		 */
		const pagePromise = (link: string): Promise<ProductType> => {
			return new Promise(async (resolve, reject) => {
				let productObj = {} as ProductType;
				let newPage = await browser.newPage();
				await newPage.goto(link);

				productObj['title'] = await newPage.$eval(
					'h1#title span#productTitle',
					(el) => {
						return el.textContent.trim();
					}
				);
				productObj['price'] = await newPage.$eval(
					'span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay span.a-offscreen',
					(el) => {
						return el.textContent;
					}
				);
				productObj['numOfReviews'] = await newPage.$eval(
					'a#acrCustomerReviewLink span#acrCustomerReviewText',
					(el) => {
						return el.textContent;
					}
				);
				productObj['avgRating'] = await newPage.$eval(
					'.a-icon.a-icon-star-medium.averageStarRating span',
					(el) => {
						return el.textContent;
					}
				);
				resolve(productObj);

				await newPage.close();
			});
		};

		/**
		 * loop for visiting all collected pages and storing relevant data in the database
		 */
		for (let i = 0; i < urls.length; i++) {
			let link = urls[i];
			const pageData = await pagePromise(link);
			console.log(pageData);
			await Product.create(pageData);
		}
	},
};

export default scrapeService;
