import React, { useEffect, useState } from 'react';
import { getCurrentWeather, getHourlyForecast } from '../../Utils/api';
import HomeView from './HomeView';
import { getCurrentCoordinates } from '../../Utils/helpers';

const HomeContainer = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const location = await getCurrentCoordinates();
        setCoords(location);
      } catch (err) {
        console.log('Failed to get location', err);
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, []);

  useEffect(() => {
    if (!coords) return;

    const fetchAllData = async () => {
      try {
        setLoading(true);
        const [weather, hourly] = await Promise.all([
          getCurrentWeather(coords.lat, coords.lon),
          getHourlyForecast(coords.lat, coords.lon)
        ]);

        setWeatherData(weather);

        const modifiedHourlyData = {
          ...hourly,
          list: [
            {
              dt: weather.dt,
              weather: weather.weather,
              temp: { day: weather.main.temp },
              main: weather.main
            },
            ...hourly.list.slice(0, 23)
          ]
        };

        setHourlyData(modifiedHourlyData);
      } catch (error) {
        console.log('Failed to fetch weather data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [coords]);

  return (
    <HomeView 
      weatherData={weatherData} 
      hourlyData={hourlyData} 
      navigation={navigation}
      loading={loading}
    />
  );
};

export default HomeContainer;