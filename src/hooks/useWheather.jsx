import { useState } from "react";
import { fetchWeatherByCity } from "../services/weatherAPI";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, getWeather };
};
