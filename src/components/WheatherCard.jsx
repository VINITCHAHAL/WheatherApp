import React from "react";
import "../styles/global.css";

const WeatherCard = ({ weather, loading, error }) => {
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "4rem",
          animation: "bounceIn 0.8s ease",
        }}
      >
        <div className="cosmic-loader"></div>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <h3
            style={{
              color: "white",
              fontSize: "24px",
              fontFamily: "Orbitron, monospace",
              fontWeight: "700",
              marginBottom: "1rem",
              animation: "textGlow 2s ease infinite",
            }}
          >
            🌟 SCANNING ATMOSPHERE
          </h3>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "16px",
              fontWeight: "500",
              letterSpacing: "1px",
            }}
          >
            Connecting to weather satellites...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="weather-card-cosmic"
        style={{
          maxWidth: "450px",
          margin: "2rem auto",
          textAlign: "center",
          background:
            "linear-gradient(135deg, rgba(255, 71, 87, 0.15), rgba(255, 107, 107, 0.15))",
          animation: "slideInRight 0.8s ease",
        }}
      >
        <div
          style={{
            fontSize: "80px",
            marginBottom: "1.5rem",
            animation: "float 3s ease infinite",
          }}
        >
          🌪️
        </div>
        <h3
          style={{
            color: "white",
            marginBottom: "1rem",
            fontSize: "24px",
            fontFamily: "Orbitron, monospace",
            fontWeight: "700",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          WEATHER SCAN FAILED
        </h3>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "1.5",
          }}
        >
          {error}
        </p>
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "15px",
            fontSize: "14px",
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
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
      Clear:
        "linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 152, 0, 0.2))",
      Clouds:
        "linear-gradient(135deg, rgba(158, 158, 158, 0.2), rgba(117, 117, 117, 0.2))",
      Rain:
        "linear-gradient(135deg, rgba(33, 150, 243, 0.2), rgba(3, 169, 244, 0.2))",
      Snow:
        "linear-gradient(135deg, rgba(224, 224, 224, 0.2), rgba(189, 189, 189, 0.2))",
      Thunderstorm:
        "linear-gradient(135deg, rgba(103, 58, 183, 0.2), rgba(156, 39, 176, 0.2))",
      Drizzle:
        "linear-gradient(135deg, rgba(0, 188, 212, 0.2), rgba(0, 172, 193, 0.2))",
      Mist:
        "linear-gradient(135deg, rgba(158, 158, 158, 0.15), rgba(117, 117, 117, 0.15))",
      Fog:
        "linear-gradient(135deg, rgba(158, 158, 158, 0.15), rgba(117, 117, 117, 0.15))",
      Haze:
        "linear-gradient(135deg, rgba(255, 193, 7, 0.15), rgba(255, 235, 59, 0.15))",
    };
    return (
      gradients[weatherMain] ||
      "linear-gradient(135deg, rgba(33, 150, 243, 0.2), rgba(3, 169, 244, 0.2))"
    );
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

  return (
    <div
      className="weather-card-cosmic"
      style={{
        maxWidth: "550px",
        margin: "2rem auto",
        background: `${getWeatherGradient(
          weather.weather[0].main
        )}, rgba(255, 255, 255, 0.08)`,
        position: "relative",
        animation: "bounceIn 1s ease",
      }}
    >
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${20 + i * 15}%`,
            width: `${4 + Math.random() * 4}px`,
            height: `${4 + Math.random() * 4}px`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}

      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <span style={{ fontSize: "2rem", marginRight: "1rem" }}>📍</span>
            <h2
              style={{
                color: "white",
                fontSize: "32px",
                fontFamily: "Orbitron, monospace",
                fontWeight: "900",
                textShadow: "0 3px 15px rgba(0, 0, 0, 0.4)",
                letterSpacing: "1px",
              }}
            >
              {weather.name.toUpperCase()}
            </h2>
            <span
              style={{
                fontSize: "18px",
                marginLeft: "1rem",
                color: "rgba(255, 255, 255, 0.8)",
                fontWeight: "600",
              }}
            >
              {weather.sys.country}
            </span>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: "0.75rem 1.5rem",
              display: "inline-block",
              backdropFilter: "blur(10px)",
            }}
          >
            <p
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "16px",
                fontWeight: "600",
                margin: 0,
                letterSpacing: "0.5px",
              }}
            >
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

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "3rem",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "25px",
            padding: "2.5rem",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            position: "relative",
          }}
        >
          <div className="weather-icon-container" style={{ marginRight: "3rem" }}>
            <div
              style={{
                fontSize: "8rem",
                animation: "float 4s ease infinite",
                filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.5))",
              }}
            >
              {getWeatherEmoji(weather.weather[0].main)}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "5rem",
                fontFamily: "Orbitron, monospace",
                fontWeight: "900",
                color: "white",
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                lineHeight: "1",
                marginBottom: "1rem",
                position: "relative",
              }}
            >
              {Math.round(weather.main.temp)}°
              <span
                style={{
                  fontSize: "2rem",
                  opacity: "0.8",
                  verticalAlign: "top",
                }}
              >
                C
              </span>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
                borderRadius: "15px",
                padding: "1rem 2rem",
                marginBottom: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  color: "white",
                  fontFamily: "Orbitron, monospace",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  margin: 0,
                }}
              >
                {getWeatherDescription(weather.weather[0].main)}
              </p>
            </div>

            <p
              style={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.9)",
                textTransform: "capitalize",
                fontWeight: "500",
                fontStyle: "italic",
              }}
            >
              "{weather.weather[0].description}"
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
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
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                borderRadius: "20px",
                padding: "1.5rem",
                textAlign: "center",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                e.currentTarget.style.boxShadow = `0 15px 35px ${item.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  marginBottom: "0.75rem",
                  animation: "float 3s ease infinite",
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {item.icon}
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontFamily: "Orbitron, monospace",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "0.5rem",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(255, 255, 255, 0.8)",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            padding: "1.5rem",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            position: "relative",
          }}
        >
          <div style={{ textAlign: "center", flex: 1 }}>
            <div
              style={{
                fontSize: "28px",
                marginBottom: "0.75rem",
                animation: "float 4s ease infinite",
              }}
            >
              🌅
            </div>
            <div
              style={{
                color: "white",
                fontFamily: "Orbitron, monospace",
                fontWeight: "700",
                fontSize: "16px",
                marginBottom: "0.5rem",
              }}
            >
              SUNRISE
            </div>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              {formatTime(weather.sys.sunrise)}
            </div>
          </div>

          <div
            style={{
              width: "2px",
              background:
                "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent)",
              margin: "0 1rem",
            }}
          ></div>

          <div style={{ textAlign: "center", flex: 1 }}>
            <div
              style={{
                fontSize: "28px",
                marginBottom: "0.75rem",
                animation: "float 4s ease infinite reverse",
              }}
            >
              🌇
            </div>
            <div
              style={{
                color: "white",
                fontFamily: "Orbitron, monospace",
                fontWeight: "700",
                fontSize: "16px",
                marginBottom: "0.5rem",
              }}
            >
              SUNSET
            </div>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              {formatTime(weather.sys.sunset)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
