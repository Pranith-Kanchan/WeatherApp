import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#4279fe',
    borderRadius: 17,
    marginBottom: '5%',
    alignItems: 'center',
    flex: 1,
    justifyContent: "center",

  },
  temp: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: '10%'
  },
  listItem: {
    marginRight: 12,
    borderWidth: 1.7,
    borderRadius: 15,
    height: 120,
    width: 68,
    alignItems: "center",
    justifyContent: 'center',
    borderColor: 'lightgray'
  },
  firstListItem:{
    marginRight: 12,
    borderRadius: 15,
    height: 120,
    width: 68,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor:'#4279fe'
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    color: 'white'
  },
  subTitle: {
    fontSize: 18,
    color: 'white'
  },
  title1: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black'
  },
  subTitle3: {
    fontSize: 16,
    color: 'black'
  },
  subTitle2: {
    fontSize: 17,
    color: '#8ebeff'
  },
  subTitle1: {
    fontSize: 22,
    color: 'white',
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    marginBottom:'5%'
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1%'
  },
  cityName: {
    fontSize: 32,
    fontWeight: '600',
    color: 'black'
  },
  countryName: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black'
  },
  head: {
    marginBottom: '5%'
  },
  weatherImage: {
    height: '27%',
    width: '27%',
    resizeMode: 'contain',
    marginTop: '5%'
  },
  hourlyWeatherImage: {
    height: '35%',
    width: '35%',
    resizeMode: 'contain',
    marginTop: '5%'
  },
  dateText: {
    fontSize: 17,
    color: '#8ebeff',
    fontWeight: '400',
  }, line: {
    height: 1,
    backgroundColor: 'white',
    width: '100%'
  }, box: {
    flexDirection: 'row',
    flex: 1,
    gap: 10,
    paddingVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: 'white',
  }, box1: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Cbox: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  }, time: {
    fontSize: 16,
    fontWeight: '600',
    color: 'gray'
  },
  temp1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  firstListItemText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  weather: {
    fontSize: 14,
    color: '#555',
  }, button: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff' 
  }
});