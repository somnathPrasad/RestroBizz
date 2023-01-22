import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const method = req.method;
  let result;
  switch (method) {
    case 'GET':
      result = await prisma.restaurants.findMany();
      res.json(result);
      break;
    case 'POST':
      const data = JSON.parse(req.body);
      result = await prisma.restaurants.create({ data });
      res.json(result);
      break;
  }
}
