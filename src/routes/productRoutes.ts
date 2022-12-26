import express, { Router } from 'express';
import {
	getProducts,
	storeProducts,
} from '../controllers/productController.js';

const router: Router = express.Router();

router.route('/').get(getProducts).post(storeProducts);

export default router;
