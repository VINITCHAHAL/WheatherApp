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
    <div className="flex flex-col sm:flex-row justify-center items-center mb-12 md:mb-16 gap-4 md:gap-6 px-4 sm:px-0 slide-in">
      <div className="relative flex items-center w-full sm:w-auto">
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="✨ Discover Weather Magic..."
          className="input-cosmic w-full sm:w-[350px] text-base md:text-lg font-medium relative"
        />
      </div>

      <button
        onClick={handleSearch}
        className="btn-magical relative overflow-hidden w-full sm:w-auto"
      >
        <span className="relative z-2">🔮 Explore</span>
      </button>
    </div>
  );
};

export default SearchBar;
