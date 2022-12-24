import express from 'express';
import {
	getProducts,
	storeProducts,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts).post(storeProducts);

export default router;
