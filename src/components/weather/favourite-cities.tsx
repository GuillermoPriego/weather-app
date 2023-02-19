import Link from "next/link";
import { CityResponse } from "models/city-response";
import { CountryFlag } from "../utils/country-flag";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const FavouriteCities: React.FunctionComponent = () => {
  const [favCities, setFavCities] = useLocalStorage<CityResponse[]>(
    "favCities",
    []
  );

  const removeFavCity = (city: CityResponse) => {
    const confirmed = confirm(
      `Are you sure you want to remove ${city.name} from your favourites?`
    );
    if (confirmed) {
      setFavCities(favCities.filter((c) => c.name !== city.name));
    }
  };

  const userHasFavCities = favCities.length > 0;

  return (
    <div data-testid="favourite-cities-section">
      <h2 className="text-2xl font-semibold">Favourite Cities</h2>
      {userHasFavCities && (
        <ul
          className="flex flex-col mt-4 gap-4"
          data-testid="favourite-cities-list"
        >
          {favCities.map((city) => (
            <li
              key={city.name}
              className="w-full flex justify-between"
              data-testid="favourite-city"
            >
              <div className="flex items-center flex-1 space-x-4">
                <CountryFlag countryCode={city.country} />
                <Link
                  href={`/city/${city.name}?state=${city.state}&country=${city.country}&lat=${city.lat}&lon=${city.lon}`}
                  className="text-xl font-bold"
                >
                  {city.name}
                </Link>
              </div>
              <button
                type="button"
                data-testid="remove-fav-city"
                onClick={() => removeFavCity(city)}
                className="text-red-400 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {!userHasFavCities && (
        <p className="mt-4 text-gray-500" data-testid="no-favourite-cities">
          No favourite cities yet
        </p>
      )}
    </div>
  );
};
