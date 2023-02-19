import * as React from "react";
import { render, screen } from "@testing-library/react";
import { WeatherForecastItem } from "@/components/weather/forecast-item";

const mockForecast = {
  dt: 1676397600,
  main: {
    temp: 12,
  },
  weather: [
    {
      icon: "01d",
    },
  ],
};

// eslint-disable-next-line react/display-name
jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

describe("WeatherForecastItem", () => {
  it("renders the time, temperature, and weather icon correctly", () => {
    render(<WeatherForecastItem forecast={mockForecast} />);

    expect(screen.getByText("7:00 p. m.")).toBeInTheDocument();
    expect(screen.getByText("12°C")).toBeInTheDocument();
    expect(screen.getByAltText("weather icon")).toHaveAttribute(
      "src",
      "http://openweathermap.org/img/wn/01d@2x.png"
    );
  });
});
