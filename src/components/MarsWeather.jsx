import React, { useState, useEffect } from 'react';
import { fetchMarsWeather, fetchNASAWeatherData } from '../services/marsWeatherService';

const MarsWeather = () => {
  const [marsData, setMarsData] = useState(null);
  const [nasaData, setNasaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMarsWeather = async () => {
      try {
        setLoading(true);
        
        try {
          const data = await fetchMarsWeather();
          setMarsData(data);
        } catch (marsError) {
          console.log('Mars weather not available, fetching NASA APOD data instead');
          const nasaApod = await fetchNASAWeatherData();
          setNasaData(nasaApod);
        }
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getMarsWeather();
  }, []);

  if (loading) return <div className="p-4 text-center">Loading Mars weather...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="mars-weather bg-gradient-to-br from-red-500 to-orange-600 p-6 rounded-lg text-white">
      {marsData && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Mars Weather</h2>
          {marsData.sol_keys && marsData.sol_keys.length > 0 ? (
            (() => {
              const latestSol = marsData.sol_keys[marsData.sol_keys.length - 1];
              const latestData = marsData[latestSol];
              return (
                <div className="space-y-2">
                  <p><strong>Sol {latestSol}</strong> (Martian Day)</p>
                  <p>Season: {latestData?.Season || 'N/A'}</p>
                  <p>Temperature: {latestData?.AT?.av ? `${Math.round(latestData.AT.av)}°C` : 'N/A'}</p>
                  <p>Wind Speed: {latestData?.HWS?.av ? `${Math.round(latestData.HWS.av)} m/s` : 'N/A'}</p>
                  <p>Pressure: {latestData?.PRE?.av ? `${Math.round(latestData.PRE.av)} Pa` : 'N/A'}</p>
                  <p className="text-sm opacity-75">Source: {marsData.source}</p>
                </div>
              );
            })()
          ) : (
            <p>No recent Mars weather data available</p>
          )}
        </div>
      )}
      
      {nasaData && (
        <div>
          <h2 className="text-2xl font-bold mb-4">NASA Space Data</h2>
          <div className="space-y-2">
            <p><strong>{nasaData.title}</strong></p>
            <p className="text-sm">{nasaData.explanation?.substring(0, 200)}...</p>
            {nasaData.url && (
              <img 
                src={nasaData.url} 
                alt={nasaData.title}
                className="w-full h-48 object-cover rounded mt-2"
              />
            )}
            <p className="text-sm opacity-75">Date: {nasaData.date}</p>
            <p className="text-sm opacity-75">Source: {nasaData.source}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarsWeather;
