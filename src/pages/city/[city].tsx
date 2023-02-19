import { Layout } from "@/components/layout";
import { Forecast } from "@/components/weather/forecast";
import { HeroWeather } from "@/components/weather/hero-weather";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  fetchForecastByLocation,
  fetchWeatherByLocation,
} from "lib/weather-api";
import { CityResponse } from "models/city-response";
import { ForecastResponse } from "models/forecast-api-response";
import { WeatherResponse } from "models/weather-api-response";
import { GetServerSideProps } from "next";
import * as React from "react";

const CityPage: React.FunctionComponent<{
  weather: WeatherResponse;
  forecast: ForecastResponse;
  city: CityResponse;
}> = ({ weather, forecast, city }) => {
  const [favCities, setFavCities] = useLocalStorage<CityResponse[]>(
    "favCities",
    []
  );

  const toggleFavCity = () => {
    if (favCities.find((c) => c.name === city.name)) {
      setFavCities(favCities.filter((c) => c.name !== city.name));
    } else {
      setFavCities([...favCities, city]);
    }
  };

  const { name, country, state } = city;
  return (
    <Layout
      title={`${name} - ${country}`}
      description={`Weather in ${city}, ${state}, ${country}`}
    >
      <div className="mt-12">
        <HeroWeather weather={{ ...weather, name }} />
      </div>
      <div className="mt-4 text-right">
        <button
          type="button"
          className="text-white py-2 px-4 rounded bg-teal-500 hover:bg-teal-700"
          onClick={toggleFavCity}
          data-testid="toggle-fav-city"
        >
          {favCities.find((c) => c.name === city.name)
            ? "Remove from favourites"
            : "Add to favourites"}
        </button>
      </div>
      <div className="mt-12">
        <Forecast forecast={forecast} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { city } = context.params as { city: string };
  const { state, country, lat, lon } = context.query;

  if (!lat || !lon) {
    return {
      notFound: true,
    };
  }

  // check if lat and lon are numbers
  if (isNaN(Number(lat)) || isNaN(Number(lon))) {
    // redirect to 404 page
    return {
      notFound: true,
    };
  }

  const [weather, forecast] = await Promise.all([
    fetchWeatherByLocation(Number(lat), Number(lon)),
    fetchForecastByLocation(Number(lat), Number(lon)),
  ]);

  const cityResponse: CityResponse = {
    name: city,
    state: state as string,
    country: country as string,
    lat: Number(lat),
    lon: Number(lon),
  };

  return {
    props: {
      weather,
      forecast,
      city: cityResponse,
    },
  };
};

export default CityPage;
