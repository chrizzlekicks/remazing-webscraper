import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
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

export default mongoose.model('Product', productSchema);
