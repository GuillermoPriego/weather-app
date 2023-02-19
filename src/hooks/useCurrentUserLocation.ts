import { useEffect, useState } from "react";

export function useCurrentUserLocation() {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );

  useEffect(() => {
    async function fetchLocation() {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              setLocation({ lat, lon });
            },
            () => setLocation(null)
          );
        } else {
          setLocation(null);
        }
      } catch (error) {
        console.error(error);
        setLocation(null);
      }
    }

    fetchLocation();
  }, []);

  return location;
}
