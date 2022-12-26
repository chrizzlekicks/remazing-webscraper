import mongoose from 'mongoose';

const db = (uri: string): void => {
	mongoose
		.connect(uri, {
			dbName: 'scrape',
		})
		.then(() => console.log('successfully connected to db'))
		.catch((e) => console.log(e));
};

export default db;
