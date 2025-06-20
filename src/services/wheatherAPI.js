import config from "../config";

export const fetchWeatherByCity = async (city) => {
  const url = `${config.WEATHER_API_BASE_URL}/weather?q=${city}&appid=${config.WEATHER_API_KEY}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("City not found");
  return res.json();
};
