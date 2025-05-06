import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './HomeStyles';
import { formatDate, fahrenheitToCelsius, formatTimeHHMM } from '../../Utils/helpers';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { weatherImages } from '../../Utils/constants';
import { useNavigation } from '@react-navigation/native';

const HomeView = ({ weatherData, hourlyData }) => {
  const navigation = useNavigation();

  console.log('houuuuu', hourlyData)

  if (!weatherData) return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#1E90FF" />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity>
          <Ionicons name="reorder-two-outline" size={40} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="ellipsis1" size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={styles.head}>
        <Text style={styles.cityName}>{weatherData?.name}, <Text style={styles.countryName}>{weatherData?.sys?.country}</Text></Text>
      </View>

      <View style={styles.card}>
        <Image source={weatherImages[weatherData.weather[0].main]} style={styles.weatherImage} />
        <Text style={styles.subTitle1}>{weatherData?.weather[0]?.description}</Text>
        <Text style={styles.dateText}>
          {formatDate(weatherData?.dt)}
        </Text>
        <Text style={styles.temp}>{fahrenheitToCelsius(weatherData?.main?.temp)}°C</Text>
        <View style={styles.line}></View>

        <View style={styles.box1}>
          <View style={styles.box}>
            <Feather name="wind" size={25} color={'white'} />
            <View style={styles.Cbox}>
              <Text style={styles.subTitle2}>WIND</Text>
              <Text style={styles.subTitle}>{weatherData?.wind?.speed} m/s</Text>
            </View>
          </View>
          <View style={styles.box}>
            <MaterialIcons name="whatshot" size={28} color={'white'} />
            <View style={styles.Cbox}>
              <Text style={styles.subTitle2}>FEELS LIKE</Text>
              <Text style={styles.subTitle}>{fahrenheitToCelsius(weatherData?.main?.feels_like)}°C</Text>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.box1}>
          <View style={styles.box}>
            <Feather name="sun" size={25} color={'white'} />
            <View style={styles.Cbox}>
              <Text style={styles.subTitle2}>SUNRISE</Text>
              <Text style={styles.subTitle}>{formatTimeHHMM(weatherData?.sys?.sunrise)}</Text>
            </View>
          </View>
          <View style={styles.box}>
            <Octicons name="pulse" size={30} color={'white'} />
            <View style={styles.Cbox}>
              <Text style={styles.subTitle2}>PRESSURE</Text>
              <Text style={styles.subTitle}>{weatherData?.main?.pressure} mbar</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.row1}>
        <Text style={styles.title1}>Today</Text>
        <TouchableOpacity
          onPress={() => {
            const filteredHourlyData = {...hourlyData,list: hourlyData?.list?.slice(1) };
            navigation.navigate('Details', { forecastData: filteredHourlyData });
          }}
          style={styles.button}>
          <Text style={styles.subTitle3}>Next 7 days</Text>
          <AntDesign name="right" size={18} color={'black'} />
        </TouchableOpacity>
      </View>

      <View >
        <FlatList
          data={hourlyData?.list}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => (
            <View style={[
              styles.listItem,
              index === 0 && styles.firstListItem
            ]}>
              <Text style={[
                styles.time,
                index === 0 && styles.firstListItemText
              ]}>
                {formatTimeHHMM(item?.dt)}
              </Text>
              <Image
                source={weatherImages[item?.weather[0]?.main]}
                style={styles.hourlyWeatherImage} />
              <Text style={[
                styles.temp1,
                index === 0 && styles.firstListItemText
              ]}>
                {index === 0 ? "Now" : fahrenheitToCelsius(item?.temp?.day) + "°"}
              </Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};


export default HomeView;
