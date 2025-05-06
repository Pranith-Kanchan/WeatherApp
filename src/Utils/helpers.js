import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export const getCurrentCoordinates = async () => {
  const hasPermission = async () => {
    if (Platform.OS === 'ios') return true;

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  };

  const permissionGranted = await hasPermission();
  if (!permissionGranted) return null;

  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ lat: latitude, lon: longitude });
      },
      (error) => {
        console.warn('Geolocation error:', error.message);
        reject(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  });
};


export const kelvinToCelsius = (tempK) => (tempK - 273.15).toFixed(1);

export const fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5 / 9).toFixed(1);
};


export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-GB', { weekday: 'long', day: '2-digit', month: 'short' });
};

export const formatDateSeperate = (timestamp, format = 'full') => {
  const date = new Date(timestamp * 1000);
  
  if (format === 'EEEE') {
    return date.toLocaleDateString('en-GB', { weekday: 'long' });
  }
  if (format === 'dd MMM') {
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
  }
  if (format === 'full') {
    return {
      dayOfWeek: date.toLocaleDateString('en-GB', { weekday: 'long' }),
      dayMonth: date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })
    };
  }
  return date.toLocaleDateString('en-GB', { weekday: 'long', day: '2-digit', month: 'short' });
};

export const formatTimeHHMM = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};



