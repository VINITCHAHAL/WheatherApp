import React from "react";
import "../styles/global.css";

const WeatherCard = ({ weather, loading, error }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center py-16 fade-in">
        <div className="cosmic-loader"></div>
        <div className="mt-8 text-center px-4">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
            🌟 SCANNING ATMOSPHERE
          </h3>
          <p className="text-white/80 text-sm md:text-base font-medium">
            Connecting to weather satellites...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-card-cosmic max-w-md mx-auto mt-8 text-center fade-in"
           style={{
             background: "linear-gradient(135deg, rgba(255, 71, 87, 0.15), rgba(255, 107, 107, 0.15))"
           }}>
        <div className="text-5xl md:text-6xl mb-6">🌪️</div>
        <h3 className="text-white mb-4 text-xl md:text-2xl font-bold px-2">
          WEATHER SCAN FAILED
        </h3>
        <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed px-2">
          {error}
        </p>
        <div className="mt-6 p-4 bg-white/10 rounded-2xl text-xs md:text-sm text-white/70">
          💡 Try searching for a major city like "New York" or "London"
        </div>
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  const getWeatherGradient = (weatherMain) => {
    const gradients = {
      Clear: "linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 152, 0, 0.2))",
      Clouds: "linear-gradient(135deg, rgba(158, 158, 158, 0.2), rgba(117, 117, 117, 0.2))",
      Rain: "linear-gradient(135deg, rgba(33, 150, 243, 0.2), rgba(3, 169, 244, 0.2))",
      Snow: "linear-gradient(135deg, rgba(224, 224, 224, 0.2), rgba(189, 189, 189, 0.2))",
      Thunderstorm: "linear-gradient(135deg, rgba(103, 58, 183, 0.2), rgba(156, 39, 176, 0.2))",
      Drizzle: "linear-gradient(135deg, rgba(0, 188, 212, 0.2), rgba(0, 172, 193, 0.2))",
      Mist: "linear-gradient(135deg, rgba(158, 158, 158, 0.15), rgba(117, 117, 117, 0.15))",
      Fog: "linear-gradient(135deg, rgba(158, 158, 158, 0.15), rgba(117, 117, 117, 0.15))",
      Haze: "linear-gradient(135deg, rgba(255, 193, 7, 0.15), rgba(255, 235, 59, 0.15))",
    };
    return gradients[weatherMain] || "linear-gradient(135deg, rgba(33, 150, 243, 0.2), rgba(3, 169, 244, 0.2))";
  };

  const getWeatherEmoji = (weatherMain) => {
    const emojis = {
      Clear: "☀️",
      Clouds: "☁️",
      Rain: "🌧️",
      Snow: "❄️",
      Thunderstorm: "⛈️",
      Drizzle: "🌦️",
      Mist: "🌫️",
      Fog: "🌫️",
      Haze: "🌤️",
    };
    return emojis[weatherMain] || "🌤️";
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getWeatherDescription = (weatherMain) => {
    const descriptions = {
      Clear: "Crystal Clear Skies",
      Clouds: "Cloudy Atmosphere",
      Rain: "Rainfall Detected",
      Snow: "Snowfall Active",
      Thunderstorm: "Storm System",
      Drizzle: "Light Precipitation",
      Mist: "Misty Conditions",
      Fog: "Foggy Weather",
      Haze: "Hazy Atmosphere",
    };
    return descriptions[weatherMain] || "Weather Conditions";
  };

  const getDataQualityColor = (quality) => {
    switch(quality) {
      case 'good': return '#4ade80'; 
      case 'fair': return '#fbbf24'; 
      case 'poor': return '#f87171'; 
      default: return '#94a3b8'; 
    }
  };

  const getDataQualityText = (quality) => {
    switch(quality) {
      case 'good': return 'High Accuracy';
      case 'fair': return 'Moderate Accuracy';
      case 'poor': return 'Limited Accuracy';
      default: return 'Standard Data';
    }
  };

  return (
    <div className="weather-card-cosmic max-w-2xl mx-auto mt-8 relative fade-in px-2 sm:px-0"
         style={{
           background: `${getWeatherGradient(weather.weather[0].main)}, rgba(255, 255, 255, 0.08)`
         }}>

      <div className="relative z-2">
        {weather.dataQuality && (
          <div className="absolute top-4 right-4 z-10">
            <div 
              className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 border border-white/30"
              style={{ borderLeftColor: getDataQualityColor(weather.dataQuality), borderLeftWidth: '3px' }}
            >
              <span className="text-white text-xs font-semibold">
                {getDataQualityText(weather.dataQuality)}
              </span>
            </div>
          </div>
        )}

        <div className="text-center mb-6 md:mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 px-2">
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl mr-2 md:mr-4">📍</span>
              <h2 className="text-white text-2xl md:text-4xl font-bold tracking-wider break-words text-center">
                {weather.name.toUpperCase()}
              </h2>
              <span className="text-base md:text-lg ml-2 md:ml-4 text-white/80 font-semibold">
                {weather.sys.country}
              </span>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl px-4 md:px-6 py-2 md:py-3 inline-block backdrop-blur-sm mx-2">
            <p className="text-white/90 text-sm md:text-base font-semibold m-0 break-words">
              🗓️{" "}
              {new Date().toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mb-8 md:mb-12 relative mx-2 sm:mx-0">
          <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 border border-white/30 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="text-6xl md:text-8xl weather-icon-glow text-center drop-shadow-2xl p-4 md:p-6">
                  {getWeatherEmoji(weather.weather[0].main)}
                </div>
              </div>

              <div className="text-center md:text-left flex-1 space-y-4 md:space-y-6">
                <div className="text-5xl md:text-6xl font-black text-white leading-none drop-shadow-lg px-2 md:px-4 py-2">
                  {Math.round(weather.main.temp)}°
                  <span className="text-2xl md:text-3xl opacity-80 align-top">C</span>
                </div>

                <div className="bg-gradient-to-r from-white/30 to-white/20 rounded-2xl px-6 md:px-8 py-4 md:py-6 shadow-lg border border-white/20">
                  <p className="text-base md:text-xl text-white font-bold uppercase m-0 break-words tracking-wide">
                    {getWeatherDescription(weather.weather[0].main)}
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl px-6 md:px-8 py-3 md:py-4 inline-block border border-white/20">
                  <p className="text-sm md:text-base text-white/90 capitalize font-medium italic break-words">
                    "{weather.weather[0].description}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 px-2 sm:px-5">
          {[
            {
              label: "Feels Like",
              value: `${Math.round(weather.main.feels_like)}°C`,
              icon: "🌡️",
              color: "#ff6b35",
            },
            {
              label: "Humidity",
              value: `${weather.main.humidity}%`,
              icon: "💧",
              color: "#06ffa5",
            },
            {
              label: "Pressure",
              value: `${weather.main.pressure} hPa`,
              icon: "📊",
              color: "#ffd23f",
            },
            {
              label: "Wind Speed",
              value: `${weather.wind.speed} m/s`,
              icon: "💨",
              color: "#f7931e",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/12 rounded-2xl p-3 md:p-4 text-center backdrop-blur-md border border-white/20 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:scale-105"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 10px 25px ${item.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="text-2xl md:text-3xl mb-2">
                {item.icon}
              </div>
              <div className="text-sm md:text-lg font-bold text-white mb-2 break-words">
                {item.value}
              </div>
              <div className="text-xs text-white/80 font-semibold uppercase break-words">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-md border border-white/20 mb-6 mx-2 sm:mx-5">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="text-left">
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wide">Data Source</p>
              <p className="text-white text-sm font-bold">{weather.source || 'OpenWeatherMap'}</p>
            </div>
            {weather.locationAccuracy && (
              <div className="text-center">
                <p className="text-white/80 text-xs font-semibold uppercase tracking-wide">GPS Accuracy</p>
                <p className="text-white text-sm font-bold">±{Math.round(weather.locationAccuracy)}m</p>
              </div>
            )}
            <div className="text-right">
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wide">Last Updated</p>
              <p className="text-white text-sm font-bold">
                {weather.lastUpdated ? new Date(weather.lastUpdated).toLocaleTimeString() : new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between bg-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-md border border-white/20 relative mx-2 sm:mx-5">
          <div className="text-center flex-1">
            <div className="text-2xl md:text-3xl mb-3">🌅</div>
            <div className="text-white font-bold text-sm md:text-base mb-2">
              SUNRISE
            </div>
            <div className="text-white/90 text-base md:text-lg font-semibold">
              {formatTime(weather.sys.sunrise)}
            </div>
          </div>

          <div className="w-0.5 mx-2 md:mx-4 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

          <div className="text-center flex-1">
            <div className="text-2xl md:text-3xl mb-3">🌇</div>
            <div className="text-white font-bold text-sm md:text-base mb-2">
              SUNSET
            </div>
            <div className="text-white/90 text-base md:text-lg font-semibold">
              {formatTime(weather.sys.sunset)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
