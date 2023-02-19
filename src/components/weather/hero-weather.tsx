import * as React from "react";
import Image from "next/image";
import { WeatherResponse } from "models/weather-api-response";
import { FaThermometerEmpty, FaWind } from "react-icons/fa";
import { CountryFlag } from "../utils/country-flag";
import { Stat } from "./stat";

export const HeroWeather: React.FunctionComponent<{
  weather: WeatherResponse;
}> = ({ weather }) => {
  return (
    <div className="">
      <div className="flex items-center">
        <header className="flex-1">
          <h2 className="text-4xl">
            {weather.name}
            <CountryFlag countryCode={weather.sys.country} />
          </h2>
          <h3 className="text-xl font-semibold text-gray-500 first-letter:uppercase">
            {weather.weather[0].description}
          </h3>
        </header>
        <Image
          src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
          alt="weather icon"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className="flex items-center">
        <div className="flex gap-6">
          <Stat
            icon={
              <FaThermometerEmpty
                className={`${
                  weather.main.temp > 0 ? "text-red-500" : "text-blue-500"
                }`}
              />
            }
            text={`${weather.main.temp}°C`}
          />
          <Stat
            icon={<FaWind className="text-blue-500" />}
            text={`${weather.wind.speed} m/s`}
          />
        </div>
      </div>
    </div>
  );
};
