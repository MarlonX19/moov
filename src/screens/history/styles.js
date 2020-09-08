import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },

  NoRides: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  NoRidesText: {
    fontSize: 20,
    color: 'grey',
  },

  ActivityIndicatorView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  cardBody: {
    width: '95%',
    backgroundColor: 'red',
    alignSelf: 'center',
    height: 160,
    marginVertical: 5,
    paddingHorizontal: 8,
    paddingVertical: 8,
    elevation: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    borderRadius: 4,
  },

  cardHead: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  headText: {
    fontFamily: 'sans-serif',
    color: '#404040',
    marginVertical: 2,
  },

  mainInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },

  mainText: {
    fontSize: 16,
    color: '#696969',
  },

  bottomCard: {
    flex: 1,
    justifyContent: 'space-evenly',
  },

  fromTown: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  toTown: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fromLocationText: {
    marginLeft: 10,
    color: '#696969',
  },

  markerView: {
    width: 10,
    height: 10,
    borderRadius: 30,
  }

})


export default styles;
