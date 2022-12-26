import { Schema, model } from 'mongoose';
import { ProductType } from '../@types/product.js';

const productSchema = new Schema<ProductType>(
	{
		title: {
			type: String,
			trim: true,
		},
		price: {
			type: String,
			trim: true,
		},
		numOfReviews: {
			type: String,
			trim: true,
		},
		avgRating: {
			type: String,
			trim: true,
		},
	},
	{ timestamps: true }
);

export default model('Product', productSchema);
