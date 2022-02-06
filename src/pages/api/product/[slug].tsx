import type { NextApiRequest, NextApiResponse } from 'next';
import { getProduct } from '../../../products';

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  res.status(200).json(getProduct(slug));
}
