import * as React from "react";
import { ForecastResponse } from "models/forecast-api-response";
import { WeatherForecastItem } from "./forecast-item";

export const Forecast: React.FunctionComponent<{
  forecast: ForecastResponse;
}> = ({ forecast }) => {
  const nextDays = forecast.list?.slice(0, 5);
  return (
    <>
      <h2 className="text-2xl font-semibold">Forecast</h2>
      <div
        className="grid mt-4  gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        }}
      >
        {nextDays.map((item) => (
          <WeatherForecastItem key={item.dt} forecast={item} />
        ))}
      </div>
    </>
  );
};
