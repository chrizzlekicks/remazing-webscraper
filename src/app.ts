import * as dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import cors from 'cors';
import db from './db/connect.js';
import productRouter from './routes/productRoutes.js';
import notFound from './errors/notFound.js';

/**
 * activate express
 */
const app: Express = express();

/**
 * middleware
 */
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/**
 * routes
 */
app.use('/api/v1/products', productRouter);

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
			console.log(`Server listening on port ${port}`);
		});
	} catch (e) {
		console.log(e);
	}
};

server();
