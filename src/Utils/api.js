import { API_KEY } from './constants';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async (lat, lon) => {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log('url',url)
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch current weather');
  }
  const data = await res.json();
  return data;
};

export const getHourlyForecast = async (lat, lon) => {
  const url = `${BASE_URL}/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=${API_KEY}`;
 
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch hourly forecast');
  }
  const data = await res.json();

  console.log('data---<',data)
  
  return data;

};

export const get7DayForecast = getHourlyForecast; 
