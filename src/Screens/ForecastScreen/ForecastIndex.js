import React from 'react';
import ForecastContainer from './ForecastContainer';

const ForecastIndex = ({ route, navigation }) => {
  return <ForecastContainer navigation={navigation} initialForecastData={route.params?.forecastData} />;
};

export default ForecastIndex;