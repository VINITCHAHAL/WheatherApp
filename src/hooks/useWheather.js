import { useState, useEffect } from "react";

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
      
      console.log('API Response:', data);
      
      if (response.ok && data.cod === 200) {
        setWeather(data);
        setError(null);
      } else {
        console.error('API Error:', data);
        setError(data.message || "City not found! Please check the city name.");
        setWeather(null);
      }
    } catch (err) {
      console.error('Network Error:', err);
      setError("Network error. Please check your internet connection.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Jammu"); 
  }, []);

  return {
    weather,
    loading,
    error,
    fetchWeather
  };
};

export default useWeather;
