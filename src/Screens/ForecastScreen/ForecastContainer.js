import React, { useEffect, useState } from 'react';
import { get7DayForecast } from '../../Utils/api';
import ForecastView from './ForecastView';
import { getCurrentCoordinates } from '../../Utils/helpers';

const ForecastContainer = ({ navigation, initialForecastData }) => {
  const [forecastData, setForecastData] = useState(initialForecastData || []);
  const [coords, setCoords] = useState(null);
  
  useEffect(() => {
    if (!initialForecastData) {
      const fetchCoordinates = async () => {
        try {
          const location = await getCurrentCoordinates();
          console.log('location', location);
          setCoords(location);
        } catch (err) {
          console.log('Failed to get location', err);
        }
      };
      fetchCoordinates();
    }
  }, [initialForecastData]);

  useEffect(() => {
    if (!initialForecastData && coords) {
      const fetchData = async () => {
        const data = await get7DayForecast(coords.lat, coords.lon);
        setForecastData(data);
      };
      fetchData();
    }
  }, [coords, initialForecastData]);

  return <ForecastView forecastData={forecastData} navigation={navigation} />;
};

export default ForecastContainer;