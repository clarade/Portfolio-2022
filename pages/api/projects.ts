import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { data } = await strapi.find('projects', {
		populate: ['Images', 'Thumbnail'],
	});

	return res.status(200).json(data);
};