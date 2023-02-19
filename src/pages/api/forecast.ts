import {
  fetchForecastByLocation,
  fetchWeatherByLocation,
} from "lib/weather-api";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function forecast(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (!req.query.hasOwnProperty("lat") || !req.query.hasOwnProperty("lon")) {
    res.status(400).json({ error: "Missing required parameters" });
    return;
  }

  const lat = parseFloat(req.query.lat as string);
  const lon = parseFloat(req.query.lon as string);

  if (
    isNaN(lat) ||
    isNaN(lon) ||
    lat < -90 ||
    lat > 90 ||
    lon < -180 ||
    lon > 180
  ) {
    res.status(400).json({ error: "Invalid parameter values" });
    return;
  }

  try {
    const response = await fetchForecastByLocation(lat, lon);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error calling API" });
  }
}
