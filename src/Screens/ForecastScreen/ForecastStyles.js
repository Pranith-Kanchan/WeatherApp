import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4279fe',
    paddingTop: '15%',
    paddingHorizontal: '3%'
  },
  hourlyWeatherImage: {
    height: '35%',
    width: '35%',
    resizeMode: 'contain',
    marginTop: '5%'
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
  },
  temp1: {
    fontSize: 18,
    fontWeight: 'bold',
  }, listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    gap: 7
  },

  date: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    flexDirection:'column',
    marginLeft:'2%'
  },
  dayOfWeek: {
    color: 'white',
    fontWeight:'500',
    fontSize: 15,

  },
  dayMonth: {
    color: '#8ebeff',
    fontSize: 16,
  },
  weatherImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  tempText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
  }, row: {
    flexDirection: 'row',
    justifyContent:"space-between"
  },title:{
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
  },subTitle:{
    fontSize: 22,
    color: 'white',
    fontWeight: '400',
  },loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
  },subTitle5:{
    fontSize: 19,
    color: 'white',
    fontWeight: '400',
    marginVertical:'5%',
    marginLeft:'2%'
  }

});