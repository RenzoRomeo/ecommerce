import products from "../../../products";

import type { NextApiRequest, NextApiResponse } from "next";

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  res.status(200).json(products.filter((p) => p.slug === slug)[0]);
}
