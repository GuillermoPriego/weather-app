import * as React from "react";
import useSwr from "swr";
import { useRouter } from "next/router";
import { fetcher } from "../utils/fetcher";
import { CityResponse } from "models/city-response";
import { CountryFlag } from "../utils/country-flag";
import useClickOutside from "@/hooks/useClickedOutside";

export const CitySearcher = () => {
  const ref = React.useRef(null);
  const [city, setCity] = React.useState("");
  const router = useRouter();

  // wait 1 second before fetching cities
  const debouncedCity = useDebounce(city, 1000);

  const { data: cities, error } = useSwr<CityResponse[]>(
    `/api/cities?name=${debouncedCity}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  useClickOutside(ref, () => setCity(""));

  const handleCityClick = React.useCallback(
    (city: CityResponse) => {
      router.push(
        `/city/${city.name}?state=${city.state}&country=${city.country}&lat=${city.lat}&lon=${city.lon}`
      );
    },
    [router]
  );

  const handleCityChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // if its not a valid character, return
      if (!e.target.value.match(/^[a-zA-Z0-9 ]*$/)) {
        return;
      }
      setCity(e.target.value);
    },
    []
  );

  const handleCitySubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (cities && cities.length > 0) {
        handleCityClick(cities[0]);
      }
    },
    [cities, handleCityClick]
  );

  if (error) {
    return <div>error: could not fetch cities</div>;
  }

  return (
    <form
      onSubmit={handleCitySubmit}
      className={`flex w-full bg-white rounded-3xl space-x-2 relative`}
      ref={ref}
    >
      <input
        type="text"
        id="city-name"
        name="city-name"
        value={city}
        onChange={handleCityChange}
        placeholder="Search for a city"
        className="flex-1 rounded-3xl py-2 px-6 text-gray-700 font-semibold
        focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
      />
      {cities && cities.length > 0 && ref.current && (
        <ul
          data-testid="city-searcher-list"
          className="absolute bg-white w-full rounded-2xl p-2 mt-16 right-0
          border border-gray-200 shadow-lg
          max-h-96 overflow-y-auto
          z-[1]
        "
        >
          {cities.map((city) => (
            <li
              key={`${city.name}-${city.lat}-${city.lon}`}
              onClick={() => handleCityClick(city)}
              className="flex items-baseline space-x-4 m-0 py-2 text-gray-700 font-semibold cursor-pointer hover:bg-gray-100 rounded-xl transition duration-200 ease-in-out"
            >
              <CountryFlag countryCode={city.country} />{" "}
              <span>
                {/* {city.name}
                {city.state && `, ${city.state}`} */}
                {`${city.name}, ${city.state ? city.state : ""}`}
              </span>
            </li>
          ))}
        </ul>
      )}
      <button
        type="submit"
        className="rounded-3xl py-2 px-6 bg-teal-500 text-white font-semibold"
      >
        Search
      </button>
    </form>
  );
};
// implemntation of useDebounce
function useDebounce(city: string, arg1: number) {
  const [debouncedCity, setDebouncedCity] = React.useState(city);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCity(city);
    }, arg1);

    return () => {
      clearTimeout(timer);
    };
  }, [city, arg1]);

  return debouncedCity;
}
