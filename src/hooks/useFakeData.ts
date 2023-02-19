import { ForecastResponse } from "models/forecast-api-response";
import { WeatherResponse } from "models/weather-api-response";

export const useFakeData = () => {
  const isLoading = false;
  const error = null;
  const data: { weather: WeatherResponse; forecast: ForecastResponse } = {
    weather: {
      coord: {
        lon: -3.6569,
        lat: 40.3767,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      base: "stations",
      main: {
        temp: 10.16,
        feels_like: 8.8,
        temp_min: 8.82,
        temp_max: 11.64,
        pressure: 1027,
        humidity: 60,
      },
      visibility: 10000,
      wind: {
        speed: 5.14,
        deg: 130,
      },
      clouds: {
        all: 75,
      },
      dt: 1676389593,
      sys: {
        type: 2,
        id: 2004296,
        country: "ES",
        sunrise: 1676358606,
        sunset: 1676396866,
      },
      timezone: 3600,
      id: 3123115,
      name: "Entrevías",
      cod: 200,
    },
    forecast: {
      cod: "200",
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1676397600,
          main: {
            temp: 9.73,
            feels_like: 7.71,
            temp_min: 8.87,
            temp_max: 9.73,
            pressure: 1027,
            sea_level: 1027,
            grnd_level: 953,
            humidity: 61,
            temp_kf: 0.86,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 83,
          },
          wind: {
            speed: 3.91,
            deg: 113,
            gust: 6.79,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-14 18:00:00",
        },
        {
          dt: 1676408400,
          main: {
            temp: 8.21,
            feels_like: 6.08,
            temp_min: 7.23,
            temp_max: 8.21,
            pressure: 1028,
            sea_level: 1028,
            grnd_level: 954,
            humidity: 68,
            temp_kf: 0.98,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 91,
          },
          wind: {
            speed: 3.47,
            deg: 78,
            gust: 5.83,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-14 21:00:00",
        },
        {
          dt: 1676419200,
          main: {
            temp: 6.36,
            feels_like: 4.01,
            temp_min: 6.36,
            temp_max: 6.36,
            pressure: 1029,
            sea_level: 1029,
            grnd_level: 954,
            humidity: 81,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 95,
          },
          wind: {
            speed: 3.19,
            deg: 77,
            gust: 5.51,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-15 00:00:00",
        },
        {
          dt: 1676430000,
          main: {
            temp: 6.23,
            feels_like: 3.78,
            temp_min: 6.23,
            temp_max: 6.23,
            pressure: 1028,
            sea_level: 1028,
            grnd_level: 953,
            humidity: 78,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 97,
          },
          wind: {
            speed: 3.3,
            deg: 68,
            gust: 5.72,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-15 03:00:00",
        },
        {
          dt: 1676440800,
          main: {
            temp: 5.73,
            feels_like: 3.34,
            temp_min: 5.73,
            temp_max: 5.73,
            pressure: 1029,
            sea_level: 1029,
            grnd_level: 953,
            humidity: 77,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 98,
          },
          wind: {
            speed: 3.06,
            deg: 49,
            gust: 4.08,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-15 06:00:00",
        },
        {
          dt: 1676451600,
          main: {
            temp: 7.22,
            feels_like: 5.19,
            temp_min: 7.22,
            temp_max: 7.22,
            pressure: 1029,
            sea_level: 1029,
            grnd_level: 954,
            humidity: 69,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 2.98,
            deg: 46,
            gust: 4.29,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-15 09:00:00",
        },
        {
          dt: 1676462400,
          main: {
            temp: 10.57,
            feels_like: 9.09,
            temp_min: 10.57,
            temp_max: 10.57,
            pressure: 1028,
            sea_level: 1028,
            grnd_level: 954,
            humidity: 54,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 3.02,
            deg: 82,
            gust: 3.71,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-15 12:00:00",
        },
        {
          dt: 1676473200,
          main: {
            temp: 12.67,
            feels_like: 11.22,
            temp_min: 12.67,
            temp_max: 12.67,
            pressure: 1026,
            sea_level: 1026,
            grnd_level: 953,
            humidity: 47,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 2.88,
            deg: 81,
            gust: 3.73,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-15 15:00:00",
        },
        {
          dt: 1676484000,
          main: {
            temp: 10.55,
            feels_like: 9.12,
            temp_min: 10.55,
            temp_max: 10.55,
            pressure: 1026,
            sea_level: 1026,
            grnd_level: 953,
            humidity: 56,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 2.14,
            deg: 69,
            gust: 3.45,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-15 18:00:00",
        },
        {
          dt: 1676494800,
          main: {
            temp: 8.69,
            feels_like: 7.74,
            temp_min: 8.69,
            temp_max: 8.69,
            pressure: 1028,
            sea_level: 1028,
            grnd_level: 954,
            humidity: 66,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 1.92,
            deg: 83,
            gust: 2.08,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-15 21:00:00",
        },
        {
          dt: 1676505600,
          main: {
            temp: 7.25,
            feels_like: 6.42,
            temp_min: 7.25,
            temp_max: 7.25,
            pressure: 1029,
            sea_level: 1029,
            grnd_level: 954,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 82,
          },
          wind: {
            speed: 1.58,
            deg: 88,
            gust: 1.59,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-16 00:00:00",
        },
        {
          dt: 1676516400,
          main: {
            temp: 6.05,
            feels_like: 6.05,
            temp_min: 6.05,
            temp_max: 6.05,
            pressure: 1029,
            sea_level: 1029,
            grnd_level: 954,
            humidity: 79,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03n",
            },
          ],
          clouds: {
            all: 32,
          },
          wind: {
            speed: 1.08,
            deg: 83,
            gust: 1.15,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-16 03:00:00",
        },
        {
          dt: 1676527200,
          main: {
            temp: 5.42,
            feels_like: 3.98,
            temp_min: 5.42,
            temp_max: 5.42,
            pressure: 1029,
            sea_level: 1029,
            grnd_level: 954,
            humidity: 79,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03n",
            },
          ],
          clouds: {
            all: 25,
          },
          wind: {
            speed: 1.88,
            deg: 53,
            gust: 1.84,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-16 06:00:00",
        },
        {
          dt: 1676538000,
          main: {
            temp: 7.51,
            feels_like: 6.15,
            temp_min: 7.51,
            temp_max: 7.51,
            pressure: 1030,
            sea_level: 1030,
            grnd_level: 955,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: "Clouds",
              description: "few clouds",
              icon: "02d",
            },
          ],
          clouds: {
            all: 16,
          },
          wind: {
            speed: 2.16,
            deg: 55,
            gust: 3.11,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-16 09:00:00",
        },
        {
          dt: 1676548800,
          main: {
            temp: 11.97,
            feels_like: 10.5,
            temp_min: 11.97,
            temp_max: 11.97,
            pressure: 1029,
            sea_level: 1029,
            grnd_level: 955,
            humidity: 49,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: "Clouds",
              description: "few clouds",
              icon: "02d",
            },
          ],
          clouds: {
            all: 17,
          },
          wind: {
            speed: 2.08,
            deg: 75,
            gust: 2.87,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-16 12:00:00",
        },
        {
          dt: 1676559600,
          main: {
            temp: 14.09,
            feels_like: 12.57,
            temp_min: 14.09,
            temp_max: 14.09,
            pressure: 1027,
            sea_level: 1027,
            grnd_level: 954,
            humidity: 39,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 58,
          },
          wind: {
            speed: 2.77,
            deg: 82,
            gust: 3.65,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-16 15:00:00",
        },
        {
          dt: 1676570400,
          main: {
            temp: 11.67,
            feels_like: 10.02,
            temp_min: 11.67,
            temp_max: 11.67,
            pressure: 1027,
            sea_level: 1027,
            grnd_level: 953,
            humidity: 43,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03n",
            },
          ],
          clouds: {
            all: 45,
          },
          wind: {
            speed: 2.44,
            deg: 110,
            gust: 2.88,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-16 18:00:00",
        },
        {
          dt: 1676581200,
          main: {
            temp: 9.71,
            feels_like: 8.67,
            temp_min: 9.71,
            temp_max: 9.71,
            pressure: 1029,
            sea_level: 1029,
            grnd_level: 955,
            humidity: 51,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03n",
            },
          ],
          clouds: {
            all: 39,
          },
          wind: {
            speed: 2.24,
            deg: 96,
            gust: 2.53,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-16 21:00:00",
        },
        {
          dt: 1676592000,
          main: {
            temp: 7.99,
            feels_like: 6.3,
            temp_min: 7.99,
            temp_max: 7.99,
            pressure: 1030,
            sea_level: 1030,
            grnd_level: 956,
            humidity: 64,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03n",
            },
          ],
          clouds: {
            all: 37,
          },
          wind: {
            speed: 2.7,
            deg: 49,
            gust: 3.12,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-17 00:00:00",
        },
        {
          dt: 1676602800,
          main: {
            temp: 6.71,
            feels_like: 4.56,
            temp_min: 6.71,
            temp_max: 6.71,
            pressure: 1030,
            sea_level: 1030,
            grnd_level: 955,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 5,
          },
          wind: {
            speed: 3,
            deg: 43,
            gust: 4.37,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-17 03:00:00",
        },
        {
          dt: 1676613600,
          main: {
            temp: 5.62,
            feels_like: 3.59,
            temp_min: 5.62,
            temp_max: 5.62,
            pressure: 1030,
            sea_level: 1030,
            grnd_level: 955,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 3,
          },
          wind: {
            speed: 2.55,
            deg: 54,
            gust: 3.65,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-17 06:00:00",
        },
        {
          dt: 1676624400,
          main: {
            temp: 8.18,
            feels_like: 5.93,
            temp_min: 8.18,
            temp_max: 8.18,
            pressure: 1031,
            sea_level: 1031,
            grnd_level: 957,
            humidity: 53,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 3.69,
            deg: 46,
            gust: 5.37,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-17 09:00:00",
        },
        {
          dt: 1676635200,
          main: {
            temp: 13.64,
            feels_like: 12.08,
            temp_min: 13.64,
            temp_max: 13.64,
            pressure: 1029,
            sea_level: 1029,
            grnd_level: 956,
            humidity: 39,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 4.22,
            deg: 69,
            gust: 5.38,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-17 12:00:00",
        },
        {
          dt: 1676646000,
          main: {
            temp: 16.02,
            feels_like: 14.57,
            temp_min: 16.02,
            temp_max: 16.02,
            pressure: 1027,
            sea_level: 1027,
            grnd_level: 954,
            humidity: 34,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
          clouds: {
            all: 2,
          },
          wind: {
            speed: 3.78,
            deg: 107,
            gust: 5.38,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-17 15:00:00",
        },
        {
          dt: 1676656800,
          main: {
            temp: 12.73,
            feels_like: 11.26,
            temp_min: 12.73,
            temp_max: 12.73,
            pressure: 1027,
            sea_level: 1027,
            grnd_level: 954,
            humidity: 46,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 3,
          },
          wind: {
            speed: 2.79,
            deg: 127,
            gust: 4.59,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-17 18:00:00",
        },
        {
          dt: 1676667600,
          main: {
            temp: 10.03,
            feels_like: 8.52,
            temp_min: 10.03,
            temp_max: 10.03,
            pressure: 1030,
            sea_level: 1030,
            grnd_level: 956,
            humidity: 55,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 5,
          },
          wind: {
            speed: 3.16,
            deg: 101,
            gust: 6.17,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-17 21:00:00",
        },
        {
          dt: 1676678400,
          main: {
            temp: 8.77,
            feels_like: 6.98,
            temp_min: 8.77,
            temp_max: 8.77,
            pressure: 1030,
            sea_level: 1030,
            grnd_level: 956,
            humidity: 58,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n",
            },
          ],
          clouds: {
            all: 10,
          },
          wind: {
            speed: 3.09,
            deg: 51,
            gust: 4.84,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-18 00:00:00",
        },
        {
          dt: 1676689200,
          main: {
            temp: 9.11,
            feels_like: 7.42,
            temp_min: 9.11,
            temp_max: 9.11,
            pressure: 1030,
            sea_level: 1030,
            grnd_level: 955,
            humidity: 55,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 89,
          },
          wind: {
            speed: 3.04,
            deg: 44,
            gust: 4.85,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-18 03:00:00",
        },
        {
          dt: 1676700000,
          main: {
            temp: 8.36,
            feels_like: 6.98,
            temp_min: 8.36,
            temp_max: 8.36,
            pressure: 1029,
            sea_level: 1029,
            grnd_level: 955,
            humidity: 58,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 89,
          },
          wind: {
            speed: 2.37,
            deg: 53,
            gust: 3.24,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-18 06:00:00",
        },
        {
          dt: 1676710800,
          main: {
            temp: 10.3,
            feels_like: 8.69,
            temp_min: 10.3,
            temp_max: 10.3,
            pressure: 1030,
            sea_level: 1030,
            grnd_level: 956,
            humidity: 50,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 98,
          },
          wind: {
            speed: 2.85,
            deg: 51,
            gust: 4.44,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-18 09:00:00",
        },
        {
          dt: 1676721600,
          main: {
            temp: 14.49,
            feels_like: 12.83,
            temp_min: 14.49,
            temp_max: 14.49,
            pressure: 1028,
            sea_level: 1028,
            grnd_level: 955,
            humidity: 32,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 99,
          },
          wind: {
            speed: 3.27,
            deg: 85,
            gust: 4.18,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-18 12:00:00",
        },
        {
          dt: 1676732400,
          main: {
            temp: 16.59,
            feels_like: 15.06,
            temp_min: 16.59,
            temp_max: 16.59,
            pressure: 1025,
            sea_level: 1025,
            grnd_level: 953,
            humidity: 29,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 3.17,
            deg: 101,
            gust: 4.28,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-18 15:00:00",
        },
        {
          dt: 1676743200,
          main: {
            temp: 14.14,
            feels_like: 12.58,
            temp_min: 14.14,
            temp_max: 14.14,
            pressure: 1025,
            sea_level: 1025,
            grnd_level: 952,
            humidity: 37,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 1.52,
            deg: 124,
            gust: 2.56,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-18 18:00:00",
        },
        {
          dt: 1676754000,
          main: {
            temp: 12.06,
            feels_like: 10.44,
            temp_min: 12.06,
            temp_max: 12.06,
            pressure: 1026,
            sea_level: 1026,
            grnd_level: 953,
            humidity: 43,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 1.9,
            deg: 121,
            gust: 2.09,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-18 21:00:00",
        },
        {
          dt: 1676764800,
          main: {
            temp: 10.4,
            feels_like: 8.75,
            temp_min: 10.4,
            temp_max: 10.4,
            pressure: 1026,
            sea_level: 1026,
            grnd_level: 952,
            humidity: 48,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 97,
          },
          wind: {
            speed: 2.02,
            deg: 71,
            gust: 2.12,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-19 00:00:00",
        },
        {
          dt: 1676775600,
          main: {
            temp: 9.31,
            feels_like: 8.73,
            temp_min: 9.31,
            temp_max: 9.31,
            pressure: 1025,
            sea_level: 1025,
            grnd_level: 951,
            humidity: 51,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 1.63,
            deg: 64,
            gust: 1.67,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-19 03:00:00",
        },
        {
          dt: 1676786400,
          main: {
            temp: 7.88,
            feels_like: 6.99,
            temp_min: 7.88,
            temp_max: 7.88,
            pressure: 1025,
            sea_level: 1025,
            grnd_level: 951,
            humidity: 54,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: {
            all: 96,
          },
          wind: {
            speed: 1.72,
            deg: 61,
            gust: 1.78,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "n",
          },
          dt_txt: "2023-02-19 06:00:00",
        },
        {
          dt: 1676797200,
          main: {
            temp: 10.38,
            feels_like: 8.6,
            temp_min: 10.38,
            temp_max: 10.38,
            pressure: 1025,
            sea_level: 1025,
            grnd_level: 952,
            humidity: 43,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: "Clouds",
              description: "few clouds",
              icon: "02d",
            },
          ],
          clouds: {
            all: 13,
          },
          wind: {
            speed: 1.94,
            deg: 57,
            gust: 2.88,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-19 09:00:00",
        },
        {
          dt: 1676808000,
          main: {
            temp: 14.76,
            feels_like: 13.18,
            temp_min: 14.76,
            temp_max: 14.76,
            pressure: 1023,
            sea_level: 1023,
            grnd_level: 951,
            humidity: 34,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03d",
            },
          ],
          clouds: {
            all: 25,
          },
          wind: {
            speed: 2.98,
            deg: 83,
            gust: 4.19,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-19 12:00:00",
        },
        {
          dt: 1676818800,
          main: {
            temp: 16.75,
            feels_like: 15.39,
            temp_min: 16.75,
            temp_max: 16.75,
            pressure: 1020,
            sea_level: 1020,
            grnd_level: 948,
            humidity: 35,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          clouds: {
            all: 78,
          },
          wind: {
            speed: 3.66,
            deg: 99,
            gust: 4.6,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: "d",
          },
          dt_txt: "2023-02-19 15:00:00",
        },
      ],
      city: {
        id: 3123115,
        name: "Entrevías",
        coord: {
          lat: 40.3767,
          lon: -3.6569,
        },
        country: "ES",
        population: 0,
        timezone: 3600,
        sunrise: 1676358606,
        sunset: 1676396866,
      },
    },
  };

  return { isLoading, error, data };
};
