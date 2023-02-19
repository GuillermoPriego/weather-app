import * as React from "react";
import { render, screen } from "@testing-library/react";
import { HeroWeather } from "@/components/weather/hero-weather";

const mockData = {
  name: "London",
  sys: {
    country: "GB",
  },
  main: {
    temp: 10,
  },
  weather: [
    {
      description: "Sunny",
      icon: "01d",
    },
  ],
  wind: {
    speed: 5,
  },
};

// eslint-disable-next-line react/display-name
jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

describe("HeroWeather", () => {
  it("renders the city name, weather description, temperature, and wind speed correctly", () => {
    render(<HeroWeather weather={mockData} />);

    expect(screen.getByText("London")).toBeInTheDocument();
    expect(screen.getByText("Sunny")).toBeInTheDocument();
    expect(screen.getByText("10°C")).toBeInTheDocument();
    expect(screen.getByText("5 m/s")).toBeInTheDocument();
    expect(screen.getByAltText("weather icon")).toHaveAttribute(
      "src",
      "https://openweathermap.org/img/wn/01d@2x.png"
    );
  });
});
