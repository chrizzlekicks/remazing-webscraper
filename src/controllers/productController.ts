import { Request, Response } from 'express';
import { ProductType } from '../@types/product.js';
import Product from '../models/Product.js';
import browserObj from '../scraper/browser.js';
import scrapeController from '../scraper/scrapeController.js';

const getProducts = async (
	req: Request,
	res: Response
): Promise<Response<ProductType[]>> => {
	const products: Array<ProductType> = await Product.find({});
	if (!products) {
		throw new Error('no products in database');
	}
	return res.status(200).json({ products });
};

const storeProducts = async (
	req: Request,
	res: Response
): Promise<Response<string>> => {
	const browserInstance = browserObj.configureBrowser();
	scrapeController(browserInstance);
	return res.status(201).send({ message: 'starts scraping and storing' });
};

export { getProducts, storeProducts };
