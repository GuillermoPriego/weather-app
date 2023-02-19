import * as React from "react";
import Image from "next/image";
import { ForecastItem } from "models/forecast-api-response";

export const WeatherForecastItem: React.FunctionComponent<{
  forecast: ForecastItem;
}> = ({ forecast }) => {
  const _getTime = (date: Date) => {
    return Intl.DateTimeFormat("es-ES", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  const date = new Date(forecast.dt * 1000);
  const time = _getTime(date);

  return (
    <article
      className="bg-white flex flex-col items-center text-center rounded-md p-4 md:text-lg text-sm"
      data-testid="forecast-item"
    >
      <p className="font-semibold">{time}</p>
      <Image
        src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        alt="weather icon"
        width={75}
        height={75}
      />
      <p>{Math.round(forecast.main.temp)}&deg;C</p>
    </article>
  );
};
