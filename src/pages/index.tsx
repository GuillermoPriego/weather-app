import * as React from "react";
import { Layout } from "@/components/layout";
import { useCurrentUserLocation } from "@/hooks/useCurrentUserLocation";
import { HeroWeather } from "@/components/weather/hero-weather";
import { Forecast } from "@/components/weather/forecast";
import { CitySearcher } from "@/components/weather/city-searcher";
import { ForecastResponse } from "models/forecast-api-response";
import { WeatherResponse } from "models/weather-api-response";
import { FetchingState } from "@/components/utils/fetching-state";
import { FavouriteCities } from "@/components/weather/favourite-cities";

export default function Home() {
  const location = useCurrentUserLocation();

  const { lat, lon } = location || {};

  return (
    <Layout
      title="home"
      description="This is the home page of the weather-app."
    >
      <div className="mt-12">
        <CitySearcher />
      </div>
      {lat && lon && (
        <FetchingState<WeatherResponse>
          url={`/api/weather?lat=${lat}&lon=${lon}`}
        >
          {(weather, weatherError, weatherIsLoading) => (
            // section is used to display the weather, needs something to test with crypress
            <section className="mt-12" data-testid="weather-section">
              {weatherIsLoading && <div>loading...</div>}
              {!weatherIsLoading && weatherError && (
                <div>error: could not fetch weather</div>
              )}
              {!weatherIsLoading && !weatherError && weather && (
                <HeroWeather weather={weather} />
              )}
            </section>
          )}
        </FetchingState>
      )}
      {lat && lon && (
        <FetchingState<ForecastResponse>
          url={`/api/forecast?lat=${lat}&lon=${lon}`}
        >
          {(forecast, forecastError, forecastIsLoading) => (
            <section className="mt-12" data-testid="forecast-section">
              {forecastIsLoading && <div>loading...</div>}
              {!forecastIsLoading && forecastError && (
                <div>error: could not fetch forecast</div>
              )}
              {!forecastIsLoading && !forecastError && forecast && (
                <div className="mt-12">
                  <Forecast forecast={forecast} />
                </div>
              )}
            </section>
          )}
        </FetchingState>
      )}
      <div className="mt-12">
        <FavouriteCities />
      </div>
    </Layout>
  );
}
