import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string
}

const titleStrategy = {
  marcelo: 'Marcelo e bom demais',
  carlos: 'Carlos e fraco demais'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  const titleFromId = titleStrategy[id as 'marcelo' | 'carlos'];
  res.status(200).json({ title: titleFromId });
}