// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { food } from '../../data/foods'
import FOODS from '../../data/foods'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<food[]>
) {
  res.status(200).json(FOODS)
}
