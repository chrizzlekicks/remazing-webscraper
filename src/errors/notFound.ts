import { Request, Response } from 'express';

const notFound = (req: Request, res: Response): Response<string> =>
	res.status(404).send('the route you are looking for does not exist');

export default notFound;
