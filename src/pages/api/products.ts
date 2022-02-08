import { getAllProducts } from '../../util/products';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getAllProducts());
}
