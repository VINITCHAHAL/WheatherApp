import React, { useEffect, useState } from "react";
import useWeather from "../hooks/useWheather";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WheatherCard";
import "../styles/global.css";

const Home = () => {
  const { weather, loading, error, fetchWeather } = useWeather();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 6 + 2,
          delay: Math.random() * 15,
          duration: Math.random() * 20 + 15,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const handleSearch = (cityName) => {
    fetchWeather(cityName);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation:
            "morphShape 8s ease-in-out infinite, float 6s ease infinite",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          animation:
            "morphShape 6s ease-in-out infinite reverse, float 4s ease infinite reverse",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "20%",
          width: "150px",
          height: "150px",
          background:
            "radial-gradient(circle, rgba(6, 255, 165, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          animation:
            "morphShape 10s ease-in-out infinite, float 5s ease infinite",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "4rem",
            animation: "bounceIn 1.5s ease",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "120%",
              height: "120%",
              background:
                "radial-gradient(ellipse, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
              borderRadius: "50%",
              animation: "pulse 4s ease infinite",
            }}
          ></div>

          <h1
            className="cosmic-title"
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            ⚡ WEATHERSPHERE ⚡
          </h1>

          <div
            style={{
              background:
                "linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
              borderRadius: "25px",
              padding: "1.5rem 3rem",
              display: "inline-block",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              marginTop: "1rem",
              animation: "slideInLeft 1.8s ease",
            }}
          >
            <p
              style={{
                fontSize: "1.4rem",
                color: "rgba(255, 255, 255, 0.9)",
                fontFamily: "Inter, sans-serif",
                fontWeight: "600",
                margin: 0,
                lineHeight: "1.6",
                letterSpacing: "0.5px",
              }}
            >
              🌌{" "}
              <span style={{ fontFamily: "Orbitron, monospace" }}>REAL-TIME</span>{" "}
              Atmospheric Intelligence 🌌
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: "500",
                margin: "0.5rem 0 0 0",
                fontStyle: "italic",
              }}
            >
              Explore weather patterns across the globe with cosmic precision
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
            animation: "slideInRight 2s ease",
          }}
        >
          {[
            { icon: "🛰️", text: "Satellite Data", color: "#ff6b35" },
            { icon: "⚡", text: "Instant Results", color: "#ffd23f" },
            { icon: "🌍", text: "Global Coverage", color: "#06ffa5" },
          ].map((badge, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "1rem 2rem",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                transition: "all 0.3s ease",
                cursor: "pointer",
                animation: `slideInLeft ${1.5 + index * 0.2}s ease`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
                e.currentTarget.style.boxShadow = `0 10px 30px ${badge.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>{badge.icon}</span>
              <span
                style={{
                  color: "white",
                  fontWeight: "600",
                  fontFamily: "Orbitron, monospace",
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            position: "relative",
            marginBottom: "3rem",
          }}
        >
          <SearchBar onSearch={handleSearch} />
        </div>

        <div style={{ animation: "fadeIn 2.5s ease" }}>
          <WeatherCard weather={weather} loading={loading} error={error} />
        </div>

        <div
          style={{
            marginTop: "5rem",
            paddingBottom: "3rem",
            position: "relative",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "25px",
              padding: "2rem",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
                marginBottom: "2rem",
              }}
            >
              {[
                { label: "Cities Monitored", value: "200,000+", icon: "🏙️" },
                { label: "Data Points/Hour", value: "1M+", icon: "📊" },
                { label: "Accuracy Rate", value: "99.9%", icon: "🎯" },
              ].map((stat, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                    {stat.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontFamily: "Orbitron, monospace",
                      fontWeight: "900",
                      color: "white",
                      marginBottom: "0.5rem",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "16px",
              fontWeight: "500",
              fontFamily: "Inter, sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>💫</span>
            Developed by Vinit Kumar Choudhary
            <span style={{ fontSize: "1.2rem" }}>✨</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
