import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import db from './db/connect.js';
import browserObj from './scraper/browser.js';
import scrapeController from './scraper/scrapeController.js';

const app = express();
const port = process.env.PORT;

const browserInstance = browserObj.configureBrowser();

scrapeController(browserInstance);

const server = async () => {
	try {
		db(process.env.MONGODB_URI);
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		});
	} catch (e) {
		console.log(e);
	}
};

server();
