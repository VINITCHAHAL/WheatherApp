import { useState } from "react";

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0df5524305080e65235e4fae3da0d585&units=metric`
      );
      const data = await response.json();
      
      if (response.ok && data.cod === 200) {
        setWeather(data);
        setError(null);
      } else {
        setError(data.message || "City not found! Please check the city name.");
        setWeather(null);
      }
    } catch (err) {
      setError("Network error. Please check your internet connection.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByLocation = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000
        });
      });
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=0df5524305080e65235e4fae3da0d585&units=metric`
      );
      const data = await response.json();
      
      if (response.ok && data.cod === 200) {
        setWeather({
          ...data,
          locationAccuracy: position.coords.accuracy,
          dataQuality: 'good', 
          lastUpdated: new Date().toISOString(),
          source: 'OpenWeatherMap GPS'
        });
        setError(null);
      } else {
        setError("Unable to get weather for your location.");
        setWeather(null);
      }
    } catch (err) {
      setError("Unable to access your location. Please enable location services or search for a city.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    weather,
    loading,
    error,
    fetchWeather,
    fetchWeatherByLocation
  };
};

export default useWeather;
