import "./WeatherDisplay.css";

import { useEffect, useState } from "react";
import type { Weather, WeatherItem, WeatherResponse } from "../types/Weather";

export default function WeatherDisplay() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const baseUrl = import.meta.env.VITE_OPEN_WEATHER_URL;
          const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY;
          // const q = "seoul";
          const lang = "kr";
          const units = "metric";
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // const endpoint = `${baseUrl}?q=${q}&appId=${apiKey}&lang=${lang}&units=${units}`;
          const endpoint = `${baseUrl}?lat=${lat}&lon=${lon}&appId=${apiKey}&lang=${lang}&units=${units}`;

          const res = await fetch(endpoint);
          if (!res.ok) throw new Error(`Error ${res.status}: HTTP 요청 실패`);

          const data: WeatherResponse = await res.json();

          const temperature: string = data.main.temp.toFixed(1) + "℃";
          const weatherItem: WeatherItem = data.weather[0];
          const imgUrl: string = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          weatherItem.icon = imgUrl;

          setWeather({ temp: temperature, ...weatherItem });
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "Error: 알 수 없는 에러",
          );
        }
      },
      // (error) => {
      //   console.log(error);
      // },
    );
  }, []);

  return (
    <div className="weather-display">
      {error ?? <div>{error}</div>}

      {!weather ? (
        <div>날씨를 불러오는 중...</div>
      ) : (
        <>
          <img src={weather.icon} alt={weather.main} />
          <span>{weather.description}</span>
          <span>|</span>
          <span>{weather.temp}</span>
        </>
      )}
    </div>
  );
}
