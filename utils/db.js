import { MongoClient } from 'mongodb';

const mongoDBUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.krawdvf.mongodb.net/my-db?retryWrites=true&w=majority`;

export async function connectToDatabase() {
	const client = await MongoClient.connect(mongoDBUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	return client;
}
