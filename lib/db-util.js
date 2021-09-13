import { MongoClient } from 'mongodb';

export async function connectDB(dbName) {
	const client = await MongoClient.connect(
		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qr2zl.mongodb.net/${dbName}?retryWrites=true&w=majority`
	);
	return client;
}

export async function insertDocument(client, collection, document) {
	const db = client.db();
	const result = await db.collection(collection).insertOne(document);
	return result;
}
