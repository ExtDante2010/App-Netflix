import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    await serverAuth(req);
    const movieCount = await prismadb.movie.count();

    const ramdonIndex = Math.floor(Math.random() * movieCount);

    const ramdonMovie = await prismadb.movie.findMany({
      take: 1,
      skip: ramdonIndex,
    });

    return res.status(200).json(ramdonMovie[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
