import React, { useState } from "react";
import "../styles/global.css";

const SearchBar = ({ onSearch }) => {
  const [inputCity, setInputCity] = useState("");

  const handleSearch = () => {
    if (inputCity.trim()) {
      onSearch(inputCity.trim());
      setInputCity("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "4rem",
        gap: "1.5rem",
        flexWrap: "wrap",
        animation: "slideInLeft 1.2s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "20%",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "2rem",
          opacity: "0.3",
          animation: "float 3s ease infinite",
        }}
      >
        🌍
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="✨ Discover Weather Magic..."
          className="input-cosmic"
          style={{
            width: "350px",
            fontSize: "18px",
            fontWeight: "500",
            position: "relative",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
            borderRadius: "20px",
            pointerEvents: "none",
            opacity: inputCity ? "1" : "0",
            transition: "opacity 0.3s ease",
          }}
        ></div>
      </div>

      <button
        onClick={handleSearch}
        className="btn-magical"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span style={{ position: "relative", zIndex: 2 }}>🔮 Explore</span>
      </button>

      <div
        style={{
          position: "absolute",
          right: "20%",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "2rem",
          opacity: "0.3",
          animation: "float 3s ease infinite reverse",
        }}
      >
        ⛅
      </div>
    </div>
  );
};

export default SearchBar;
