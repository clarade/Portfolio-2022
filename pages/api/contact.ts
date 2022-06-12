import type { NextApiRequest, NextApiResponse } from 'next';
import apiFetcher from '../../api/fetcher';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { email, message } = req.body;

	try {
		await apiFetcher.createMessage({ email, message });

		return res.status(204).end();
	} catch (err) {
		return res.status(400).end();
	}
};
