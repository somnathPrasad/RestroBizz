import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id || Array.isArray(id)) {
    res.status(400).json("please send 'id' in the request query.");
  } else {
    const result = await prisma.restaurants.findFirst({
      where: { id: parseInt(id) },
    });
    res.json(result);
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      handleGetRequest(req, res);
      break;
    default:
      res.status(404).json(`${req.method} not found`);
      break;
  }
}
