import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import db from './db/connect.js';
import productRoutes from './routes/productRoutes.js';
import notFound from './errors/notFound.js';

/**
 * activate express
 */
const app = express();

/**
 * middleware
 */
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/**
 * routes
 */
app.use('api/v1/products', productRoutes);

/**
 * error handling for invalid routes
 */
app.use(notFound);

/**
 * define the port
 */
const port = process.env.PORT;

/**
 * spin up the server
 */
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
