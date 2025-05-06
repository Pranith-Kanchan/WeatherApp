import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,ActivityIndicator  } from 'react-native';
import styles from './ForecastStyles';
import { fahrenheitToCelsius, formatDate ,formatDateSeperate } from '../../Utils/helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { weatherImages } from '../../Utils/constants';
import { useNavigation } from '@react-navigation/native';

const ForecastView = ({ forecastData }) => {

    const navigation = useNavigation();

  if (!forecastData) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.title}>{forecastData?.city?.name}, <Text style={styles.subTitle}>{forecastData?.city?.country}</Text></Text>
        <View></View>
      </View>
      <Text style={styles.subTitle5}>Next 7 days</Text>

      <FlatList
        data={forecastData?.list}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) =>{
          const dateParts = formatDateSeperate(item?.dt, 'full');
        return(
          <View style={styles.listItem}>
            <Image
              source={weatherImages[item?.weather[0]?.main]}
              style={styles.weatherImage}
            />
            <View style={styles.date}>
              <Text style={styles.dayOfWeek}>{dateParts.dayOfWeek}</Text>
              <Text style={styles.dayMonth}>{dateParts.dayMonth}</Text>
            </View>
            <Text style={styles.tempText}>
              Min: {fahrenheitToCelsius(item?.temp?.min)}°C
            </Text>
            <Text style={styles.tempText}>
              Max: {fahrenheitToCelsius(item?.temp?.max)}°C
            </Text>

          </View>
        )}}
      />
    </View>
  );
};

export default ForecastView;
