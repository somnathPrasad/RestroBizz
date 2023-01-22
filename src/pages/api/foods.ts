import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

async function handleGetFoods(req: NextApiRequest, res: NextApiResponse) {
  const { restroId } = req.query;
  if (typeof restroId === 'number' || typeof restroId === 'string') {
    const result = await prisma.foods.findMany({
      where: { restroId: parseInt(restroId) },
    });
    res.json(result);
  } else {
    res.status(400).json('restroId can only be a number or a string.');
  }
}

async function handlePostFoods(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  if (body.restroId) {
    const result = await prisma.foods.create({
      data: { ...body, restroId: parseInt(body.restroId) },
    });
    res.json(result);
  } else {
    res.status(400).json('data values cannot be null');
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      handleGetFoods(req, res);
      break;
    case 'POST':
      handlePostFoods(req, res);
      break;
  }
}
