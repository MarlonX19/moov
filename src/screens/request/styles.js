import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mapView: {
    flex: 1,
  },

  detailsView: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 10,
  },

  topViewDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  topTextDetails: {
    fontFamily: 'sans-serif',
    color: '#696969',
    fontSize: 16,
  },

  topTextDelivered: {
    fontFamily: 'sans-serif',
    color: '#696969',
    fontSize: 16,
    marginVertical: 10,
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
  },

  driverView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  driverInnerView: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  driverText: {
    marginHorizontal: 5,
    color: '#696969'
  }

})

export default styles;
