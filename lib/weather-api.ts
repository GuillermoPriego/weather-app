import { WeatherResponse } from "models/weather-api-response";
import { ForecastResponse } from "models/forecast-api-response";
import { getWeatherApiKey } from "./api-keys";
import { CityResponse } from "models/city-response";

const baseWeatherUrl = new URL(
  "https://api.openweathermap.org/data/2.5/weather"
);
const baseForecastUrl = new URL(
  "https://api.openweathermap.org/data/2.5/forecast"
);

const baseCityUrl = new URL("https://api.openweathermap.org/geo/1.0/direct");

export const fetchWeatherByLocation = async (
  lat: number,
  lon: number
): Promise<WeatherResponse> => {
  const apiKey = getWeatherApiKey();

  // fetch weather and forecast data
  const weatherUrl = buildUrl(baseWeatherUrl.toString(), {
    lat: lat.toString(),
    lon: lon.toString(),
    appid: apiKey,
    units: "metric",
  });

  return fetchJson<WeatherResponse>(weatherUrl.toString());
};

export const fetchForecastByLocation = async (
  lat: number,
  lon: number
): Promise<ForecastResponse> => {
  const apiKey = getWeatherApiKey();

  const forecastUrl = buildUrl(baseForecastUrl.toString(), {
    lat: lat.toString(),
    lon: lon.toString(),
    appid: apiKey,
    units: "metric",
  });

  return fetchJson<ForecastResponse>(forecastUrl.toString());
};

export const fetchCityByName = async (name: string) => {
  const apiKey = getWeatherApiKey();

  const cityUrl = buildUrl(baseCityUrl.toString(), {
    q: name,
    appid: apiKey,
    limit: "5",
  });

  return fetchJson<CityResponse[]>(cityUrl.toString());
};

export const fetchJson = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export const buildUrl = (url: string, params: Record<string, string>) => {
  const urlObj = new URL(url);
  Object.keys(params).forEach((key) => {
    urlObj.searchParams.append(key, params[key]);
  });
  return urlObj.toString();
};
