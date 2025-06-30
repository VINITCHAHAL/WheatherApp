import React, { useEffect, useState, useMemo } from "react";
import useWeather from "../hooks/useWheather";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WheatherCard";
import MarsWeather from "../components/MarsWeather";
import "../styles/global.css";

const Home = () => {
  const { weather, loading, error, fetchWeather, fetchWeatherByLocation } = useWeather();
  const [particles, setParticles] = useState([]);
  const [showMarsWeather, setShowMarsWeather] = useState(false);

  const memoizedParticles = useMemo(() => {
    const newParticles = [];
    for (let i = 0; i < 8; i++) { 
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 4 + 2, 
        delay: Math.random() * 10,
        duration: Math.random() * 15 + 20,
      });
    }
    return newParticles;
  }, []);

  useEffect(() => {
    setParticles(memoizedParticles);
  }, [memoizedParticles]);

  const handleSearch = (cityName) => {
    fetchWeather(cityName);
  };

  const handleLocationWeather = () => {
    fetchWeatherByLocation();
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
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

      <div className="absolute top-[15%] left-[5%] w-50 h-50 rounded-full float-simple opacity-20"
           style={{
             background: "radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, transparent 70%)"
           }} />

      <div className="absolute top-1/2 right-[10%] w-38 h-38 rounded-full float-simple opacity-15"
           style={{
             background: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
             animationDelay: "2s"
           }} />

      <div className="relative z-10 text-center p-4 md:p-6 lg:p-8 max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12 lg:mb-16 slide-in relative">
          <h1 className="cosmic-title relative z-2 px-2 md:px-0">
            ⚡ WEATHERSPHERE ⚡
          </h1>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl px-4 md:px-6 lg:px-8 py-3 md:py-4 inline-block border border-white/20 mt-4 fade-in mx-2 md:mx-0">
            <p className="text-base md:text-xl text-white/90 font-semibold m-0 leading-relaxed">
              🌌 <span className="font-bold">REAL-TIME</span> Atmospheric Intelligence 🌌
            </p>
            <p className="text-xs md:text-sm text-white/70 font-medium mt-2 mb-0">
              Explore weather patterns across Earth and Mars
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-12 flex-wrap fade-in" style={{ animationDelay: "0.3s" }}>
          {[
            { icon: "🛰️", text: "NASA Data", color: "#ff6b35" },
            { icon: "🎯", text: "High Accuracy", color: "#ffd23f" },
            { icon: "🌍", text: "Earth & Mars", color: "#06ffa5" },
            { icon: "📍", text: "GPS Precision", color: "#8b5cf6" },
          ].map((badge, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl px-6 py-3 backdrop-blur-md border border-white/20 flex items-center gap-2 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:scale-102"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 20px ${badge.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-white font-semibold text-sm uppercase tracking-wide">
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-8 flex-wrap fade-in" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={handleLocationWeather}
            className="bg-blue-500/20 hover:bg-blue-500/30 text-white font-semibold py-3 px-6 rounded-2xl border border-blue-500/50 transition-all duration-300 backdrop-blur-md hover:scale-105"
          >
            📍 Use My Location (High Accuracy)
          </button>
          <button
            onClick={() => setShowMarsWeather(!showMarsWeather)}
            className="bg-red-500/20 hover:bg-red-500/30 text-white font-semibold py-3 px-6 rounded-2xl border border-red-500/50 transition-all duration-300 backdrop-blur-md hover:scale-105"
          >
            🚀 {showMarsWeather ? 'Hide' : 'Show'} Mars Weather
          </button>
        </div>

        <div className="relative mb-12 fade-in" style={{ animationDelay: "0.6s" }}>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="fade-in" style={{ animationDelay: "0.9s" }}>
          <WeatherCard weather={weather} loading={loading} error={error} />
        </div>

        {showMarsWeather && (
          <div className="mt-8 fade-in" style={{ animationDelay: "1.0s" }}>
            <MarsWeather />
          </div>
        )}

        <div className="mt-16 pb-12 relative fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="bg-white/5 rounded-3xl p-6 backdrop-blur-md border border-white/10 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Cities Monitored", value: "200,000+", icon: "🏙️" },
                { label: "Data Accuracy", value: "99.9%", icon: "🎯" },
                { label: "NASA Integration", value: "Active", icon: "🛰️" },
                { label: "GPS Precision", value: "±10m", icon: "📍" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/70 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-white/60 text-sm md:text-2xl font-medium flex items-center justify-center gap-2">
            <span>💫</span>
            Developed by Vinit Choudhary
            <span>✨</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
