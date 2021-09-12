import { connectDB, insertDocument } from '../../lib/db-util';

async function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;
		if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
			res.status(402).json({ message: 'Invalid input' });
			return;
		}
		const newMessage = {
			email,
			name,
			message
		};

		let client;

		try {
			client = await connectDB('nextblog');
		} catch {
			res.status(500).json({ message: 'Could not connect to database' });
			return;
		}

		try {
			const result = await insertDocument(client, 'messages', newMessage);
			newMessage.id = result.insertedId;
		} catch {
			res.status(500).json({ message: 'Storing message failed' });
			return;
		} finally {
			client.close();
		}

		res.status(201).json({ message: 'Successfully stored message', data: newMessage });
	}
}

export default handler;
