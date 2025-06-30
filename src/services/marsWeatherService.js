import config from '../config';

export const fetchMarsWeather = async () => {
  try {
    const response = await fetch(
      `${config.NASA_API_BASE_URL}/?api_key=${config.NASA_API_KEY}&feedtype=json&ver=1.0`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch Mars weather data');
    }
    
    const data = await response.json();
    return {
      ...data,
      lastUpdated: new Date().toISOString(),
      source: 'NASA InSight'
    };
  } catch (error) {
    console.error('Error fetching Mars weather:', error);
    throw error;
  }
};

export const fetchNASAWeatherData = async (planet = 'mars') => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${config.NASA_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch NASA data');
    }
    
    const data = await response.json();
    return {
      ...data,
      lastUpdated: new Date().toISOString(),
      source: 'NASA'
    };
  } catch (error) {
    console.error('Error fetching NASA data:', error);
    throw error;
  }
};
