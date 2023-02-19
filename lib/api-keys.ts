export const getWeatherApiKey = () => {
  const apiKey = process.env.OPENWEATHER_APIKEY;
  if (!apiKey) {
    throw new Error("Missing API key OPENWEATHER_APIKEY");
  }
  return apiKey;
};
