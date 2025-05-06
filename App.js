import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForecastIndex from './src/Screens/ForecastScreen/ForecastIndex';
import HomeIndex from './src/Screens/HomeScreen/HomeIndex';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeIndex} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={ForecastIndex} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;