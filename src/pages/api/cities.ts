import { fetchCityByName } from "lib/weather-api";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function forecast(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (!req.query.hasOwnProperty("name")) {
    res.status(400).json({ error: "Missing required parameter 'name'" });
    return;
  }

  const name = req.query.name as string;

  if (!name) {
    res.status(200).json([]);
    return;
  }

  if (!name.match(/^[a-zA-Z0-9\s]+$/)) {
    res.status(400).json({ error: "Invalid parameter values" });
    return;
  }

  try {
    const response = await fetchCityByName(name);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error calling API" });
  }
}
